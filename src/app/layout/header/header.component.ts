import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  layoutService = inject(LayoutService);
  mobileSidebarHidden = computed(() =>
    this.layoutService.mobileSidebarHidden()
  );
  isMobile = computed(() => this.layoutService.isMobile());
  darkMode = false;

  ngOnInit() {
    this.layoutService.checkScreenSize();
    this.darkMode = true;
    this.applyTheme();
  }

  toggleMobileSidebar() {
    this.layoutService.setMobileSidebarHidden(!this.mobileSidebarHidden());
  }

  toggleDarkMode() {
    this.darkMode = !this.darkMode;
    this.applyTheme();
  }

  applyTheme() {
    if (this.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
