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
  signal,
} from '@angular/core';

@Component({
  selector: 'app-typing-effect',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <span>{{ displayText() }}</span>
      <span *ngIf="isTyping()" class="typing-cursor">|</span>
    </div>
  `,
  styles: [`
    .typing-cursor {
      animation: blink 1s step-end infinite;
    }
    
    @keyframes blink {
      from, to { opacity: 1; }
      50% { opacity: 0; }
    }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TypingEffectComponent implements OnInit, OnChanges, OnDestroy {
  @Input() text: string = '';
  @Input() typingSpeed: number = 30; // milliseconds per character
  
  displayText = signal('');
  isTyping = signal(false);
  
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
    this.isTyping.set(true);
    this.currentIndex = 0;
    
    this.typingInterval = setInterval(() => {
      if (this.currentIndex < this.text.length) {
        this.displayText.set(this.text.substring(0, this.currentIndex + 1));
        this.currentIndex++;
      } else {
        this.clearTypingInterval();
        this.isTyping.set(false);
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