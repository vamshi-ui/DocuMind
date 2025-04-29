import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { AvatarModule } from 'primeng/avatar';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { SliderModule } from 'primeng/slider';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { TextareaModule } from 'primeng/textarea';
import { RouterModule } from '@angular/router';
import { LayoutService } from '../layout.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    AvatarModule,
    SidebarModule,
    AccordionModule,
    TextareaModule,
    DropdownModule,
    SliderModule,
    InputSwitchModule,
    TooltipModule,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  username = 'Vamshi';
  sidebarCollapsed: boolean = false;
  isMobile = computed(() =>
    this.layoutService.isMobile()
  );
  layoutService = inject(LayoutService);
  mobileSidebarHidden = computed(() =>
    this.layoutService.mobileSidebarHidden()
  );

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  toggleMobileSidebar() {
    this.layoutService.setMobileSidebarHidden(!this.mobileSidebarHidden());
  }
}
