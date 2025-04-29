// typing-effect.component.ts
import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  computed,
  inject,
  signal,
} from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <span>{{ displayText() }}</span>
      @if(isTyping()){
      <span class="typing-cursor">|</span>
      }
    </div>
  `,
  styles: [
    `
      .typing-cursor {
        animation: blink 1s step-end infinite;
      }

      @keyframes blink {
        from,
        to {
          opacity: 1;
        }
        50% {
          opacity: 0;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingEffectComponent implements OnInit, OnChanges, OnDestroy {
  @Input() text: string = '';
  @Input() typingSpeed: number = 30; // milliseconds per character
  isTyping = computed(() => this.chatService.isTyping());
  chatService = inject(ChatService);
  displayText = signal('');

  private typingInterval: any;
  private currentIndex: number = 0;

  ngOnInit(): void {
    if (this.text) {
      this.startTyping();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['text'] && !changes['text'].firstChange) {
      // Reset and start typing when text changes
      this.resetTyping();
      this.startTyping();
    }
  }

  ngOnDestroy(): void {
    this.clearTypingInterval();
  }

  private startTyping(): void {
    this.chatService.isTyping.set(true);
    this.currentIndex = 0;

    this.typingInterval = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.displayText.set(this.text.substring(0, this.currentIndex + 1));
        this.currentIndex++;
        this.chatService.triggerScroll();
      } else {
        this.clearTypingInterval();
        this.chatService.isTyping.set(false);
      }
    }, this.typingSpeed);
  }

  private clearTypingInterval(): void {
    if (this.typingInterval) {
      clearInterval(this.typingInterval);
      this.typingInterval = null;
    }
  }

  private resetTyping(): void {
    this.clearTypingInterval();
    this.displayText.set('');
    this.currentIndex = 0;
  }
}
