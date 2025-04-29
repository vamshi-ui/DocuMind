import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  ViewChild,
} from '@angular/core';
import { WelcomeChatComponent } from './welcome-chat/welcome-chat.component';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { MessageInputComponent } from './message-input/message-input.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { ChatService } from './chat.service';
import { CommonModule } from '@angular/common';
import { LayoutService } from '../../layout/layout.service';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [
    CommonModule,
    WelcomeChatComponent,
    ChatMessagesComponent,
    MessageInputComponent,
    SuggestionsComponent,
  ],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatComponent {
  @ViewChild('chatContainer') chatContainer!: ElementRef;

  chatService = inject(ChatService);
  layoutService = inject(LayoutService);
  cdr = inject(ChangeDetectorRef);
  messages = computed(() => this.chatService.messages());
  constructor() {
    effect(() => {
      if (this.messages().length > 0) {
        // Mark for check to ensure change detection runs
        this.cdr.markForCheck();
        this.scrollToBottom();
      }
    });

    effect(() => {
      this.chatService.scrollTrigger();
      this.scrollToBottom();
    });
  }


  scrollToBottom() {
    // Increased timeout to ensure DOM has fully updated
    setTimeout(() => {
      if (this.chatContainer && this.chatContainer.nativeElement) {
        const element = this.chatContainer.nativeElement;
        element.scrollTop = element.scrollHeight;
      }
    }, 100);
  }

  ngAfterViewChecked() {
    // This will ensure scroll happens after view is fully rendered
    if (this.messages().length > 0) {
      this.scrollToBottom();
    }
  }
}
