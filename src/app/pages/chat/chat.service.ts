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

  constructor() {}

  addMessage(msg: IMessage) {
    this.messages.update((prev) => [...prev, msg]);
  }

  clearMessages() {
    this.messages.set([]);
  }
}
