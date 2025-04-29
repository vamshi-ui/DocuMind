import {
  ChangeDetectionStrategy,
  Component,
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
@Component({
  selector: 'app-settings-sidebar',
  standalone: true,
  imports: [        CommonModule,
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
          TooltipModule,],
  templateUrl: './settings-sidebar.component.html',
  styleUrl: './settings-sidebar.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsSidebarComponent {

  username = 'Alex';
  currentMessage = '';

  showControls = false;

  // Sidebar state
  sidebarCollapsed = false;
  isMobile = false;

  // Theme settings
  darkMode = false;
  selectedColor = 'blue';
  themeColors = [
    { value: 'blue', code: '#3B82F6' },
    { value: 'green', code: '#10B981' },
    { value: 'purple', code: '#8B5CF6' },
    { value: 'red', code: '#EF4444' },
    { value: 'amber', code: '#F59E0B' },
  ];

  // Model settings
  systemPrompt = '';
  temperature = 0.7;
  streamResponse = true;
  functionCalling = true;
  selectedModel = { name: 'DocuMind 3:4b', value: 'documind-3-4b' };
  selectedReasoning = { name: 'Default', value: 'default' };

  modelOptions = [
    { name: 'DocuMind 3:4b', value: 'documind-3-4b' },
    { name: 'DocuMind 3:8b', value: 'documind-3-8b' },
    { name: 'DocuMind 3:16b', value: 'documind-3-16b' },
  ];
  reasoningOptions = [
    { name: 'Default', value: 'default' },
    { name: 'Basic', value: 'basic' },
    { name: 'Advanced', value: 'advanced' },
    { name: 'Expert', value: 'expert' },
  ];
  hasUploadedFiles = true;
  suggestedPrompts = [
    {
      title: 'Summarize a Document',
      description: 'I can help you extract key information from any document.',
      icon: 'pi-file',
    },
    {
      title: 'Format & Edit Content',
      description: 'Need help cleaning up or organizing text? I can help!',
      icon: 'pi-pencil',
    },
  ];
  autoGrowTextarea(event: any) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    const newHeight = Math.min(textarea.scrollHeight, 200); // Cap at 200px
    textarea.style.height = `${newHeight}px`;
  }
  ngOnInit() {

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

  selectThemeColor(color: string) {
    this.selectedColor = color;
    // In a real app, you would apply the selected theme color
  }
}
