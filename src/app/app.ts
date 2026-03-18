import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected email = '';
  protected readonly isSubmitting = signal(false);
  protected readonly isSubmitted = signal(false);

  protected onSubmit(event: Event): void {
    event.preventDefault();

    if (!this.email || this.isSubmitting()) return;

    this.isSubmitting.set(true);

    // Simulate API call
    setTimeout(() => {
      this.isSubmitting.set(false);
      this.isSubmitted.set(true);
      console.log('Email submitted:', this.email);

      // Reset after 3 seconds for demo purposes
      setTimeout(() => {
        this.isSubmitted.set(false);
        this.email = '';
      }, 3000);
    }, 1500);
  }
}
