import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-welcome-chat',
  standalone: true,
  imports: [],
  templateUrl: './welcome-chat.component.html',
  styleUrl: './welcome-chat.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WelcomeChatComponent {

}
