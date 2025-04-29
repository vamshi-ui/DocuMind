import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  inject,
  signal,
  ViewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-message-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './message-input.component.html',
  styleUrl: './message-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageInputComponent {
  @ViewChild('messageInput') messageInput!: ElementRef;
  @ViewChild('fileContainer') fileContainer!: ElementRef;

  currentMessage = '';
  hasUploadedFiles = false;
  chatService = inject(ChatService);
  messages = computed(() => this.chatService.messages());

  sendMessage() {
    if (this.currentMessage.trim() || this.hasUploadedFiles) {
      this.chatService.addMessage({
        sender: 'user',
        content: this.currentMessage,
        isTyping: false
      });

      // Simulate AI response after short delay
      setTimeout(() => {
        this.chatService.addMessage({
          sender: 'assistant',
          content:
            "I'm DocuMind, your AI assistant. I'll help you with your request Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        isTyping: true
        });
      }, 500);

      this.currentMessage = '';

      // Reset textarea height
      setTimeout(() => {
        const textarea = this.messageInput.nativeElement;
        textarea.style.height = 'auto';
      }, 0);
    }
  }

  onEnterPress(event: any) {
    if (!event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }

ngAfterViewInit() {
    const textarea = this.messageInput.nativeElement;
    textarea.focus();
  }

  usePrompt(prompt: any) {
    this.currentMessage = prompt.title + ': ' + prompt.description;
    this.sendMessage();
  }
  autoGrowTextarea(event: Event) {
    const textarea = event.target as HTMLTextAreaElement;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}
