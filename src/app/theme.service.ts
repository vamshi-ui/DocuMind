import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  darkMode = signal<boolean>(false);

  constructor() {
    // Check for saved preference or system preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true' || 
      (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    this.setDarkMode(isDarkMode);
  }

  setDarkMode(isDark: boolean): void {
    this.darkMode.set(isDark);
    
    // Save preference
    localStorage.setItem('darkMode', isDark.toString());
    
    // Apply to document for Tailwind
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
  
  }

  toggleDarkMode(): void {
    this.setDarkMode(!this.darkMode());
  }
}
