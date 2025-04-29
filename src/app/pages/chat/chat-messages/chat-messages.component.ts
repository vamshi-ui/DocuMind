import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  inject,
  Input,
  signal,
  ViewChild,
} from '@angular/core';
import { ChatService } from '../chat.service';
import { TypingEffectComponent } from './typing-effect.component';
interface Message {
  sender: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

@Component({
  selector: 'app-chat-messages',
  standalone: true,
  imports: [CommonModule, TypingEffectComponent],
  templateUrl: './chat-messages.component.html',
  styleUrl: './chat-messages.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessagesComponent {
  chatService = inject(ChatService);
  rawMessages = computed(() => this.chatService.messages());

  typingSpeed = 20; 
  constructor() {
  }
}
