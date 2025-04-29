import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  mobileSidebarHidden = signal<boolean>(true);
  isMobile: WritableSignal<boolean> = signal(false); // ✅ declare explicitly

  constructor() { 
       // It's a good practice to call this in the constructor
       this.checkScreenSize();
    
       // Add event listener for window resize
       window.addEventListener('resize', () => this.checkScreenSize());
  }

  setMobileSidebarHidden(isHidden: boolean): void {
    this.mobileSidebarHidden.set(isHidden);
  }

  checkScreenSize(): void {
    const mobileWidth = window.innerWidth < 768;
    this.isMobile.set(mobileWidth);
    
    // If we're on mobile, hide the sidebar
    if (mobileWidth) {
      this.setMobileSidebarHidden(true);
    }
  }
  
  // Add a cleanup method to remove event listeners when service is destroyed
  ngOnDestroy(): void {
    window.removeEventListener('resize', () => this.checkScreenSize());
  }
}
