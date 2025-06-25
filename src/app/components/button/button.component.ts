import { Component, Input, Output, EventEmitter, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [MatIconModule], // Remove FontAwesome imports
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() iconLeft?: string; 
  @Input() iconRight?: string; 
  @Input() href?: string;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() target = '_self';
  @Input() label = '';

  loadingSignal = signal(false);
  disabledSignal = signal(false);

  @Input() set loading(value: boolean) { this.loadingSignal.set(value); }
  @Input() set disabled(value: boolean) { this.disabledSignal.set(value); }

  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event) {
    if (!this.disabledSignal() && !this.loadingSignal()) {
      this.clicked.emit(event);
    } else {
      event.preventDefault();
    }
  }

  // Keyboard accessibility: emit click on Enter/Space if not disabled/loading
  onKeyDown(event: KeyboardEvent) {
    if (this.disabledSignal() || this.loadingSignal()) {
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.clicked.emit(event);
    }
  }

  // Tabindex for accessibility
  get computedTabIndex(): number {
    return this.disabledSignal() || this.loadingSignal() ? -1 : 0;
  }
}