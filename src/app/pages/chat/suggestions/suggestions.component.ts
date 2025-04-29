import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './suggestions.component.html',
  styleUrl: './suggestions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SuggestionsComponent {
  suggestedPrompts = [
    {
      title: 'Summarize a Document',
      description: 'I can help you extract key information from any document.',
      icon: 'pi-file',
      id: 1,
    },
    {
      title: 'Format & Edit Content',
      description: 'Need help cleaning up or organizing text? I can help!',
      icon: 'pi-pencil',
      id: 2,
    },
  ];
}
