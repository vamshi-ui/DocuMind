import { Injectable, signal } from '@angular/core';

interface IMessage {
  sender: 'user' | 'assistant';
  content: string;
  isTyping?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  messages = signal<IMessage[]>([]);
  private _scrollSignal = signal(0); 
  isTyping = signal(false);
  scrollTrigger = this._scrollSignal.asReadonly();

  triggerScroll() {
    this._scrollSignal.update(n => n + 1); // triggers any effect using it
  }

  constructor() {}

  addMessage(msg: IMessage) {
    this.messages.update((prev) => [...prev, msg]);
  }

  clearMessages() {
    this.messages.set([]);
  }
}
