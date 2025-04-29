import { Component } from '@angular/core';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { HeaderComponent } from './layout/header/header.component';
import { SettingsSidebarComponent } from './layout/settings-sidebar/settings-sidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SidebarComponent,
    HeaderComponent,
    SettingsSidebarComponent,
    RouterModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  viewportHeight = 0;

  ngOnInit() {
    this.updateViewportDimensions();
  }

  updateViewportDimensions() {
    this.viewportHeight = window.innerHeight;
  }
}
