import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';
import { MatIconModule } from '@angular/material/icon';
import { By } from '@angular/platform-browser';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatIconModule, ButtonComponent]
    }).compileComponents();
    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // --- Rendering & Structure ---
  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render as a <button> by default', () => {
    const btn = fixture.debugElement.query(By.css('button.button'));
    expect(btn).toBeTruthy();
  });

  it('should render as an <a> when href is provided', () => {
    component.href = '/test';
    fixture.detectChanges();
    const anchor = fixture.debugElement.query(By.css('a.button'));
    expect(anchor).toBeTruthy();
    expect(anchor.nativeElement.getAttribute('href')).toBe('/test');
  });

  // --- Input Bindings & Classes ---
  it('should apply the correct variant and size classes', () => {
    component.variant = 'secondary';
    component.size = 'large';
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.classes['variant-secondary']).toBeTrue();
    expect(btn.classes['size-large']).toBeTrue();
  });

  it('should render left and right icons when provided', () => {
    component.iconLeft = 'home';
    component.iconRight = 'arrow_forward';
    fixture.detectChanges();
    const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
    const rightIcon = fixture.debugElement.query(By.css('.icon-right'));
    expect(leftIcon).toBeTruthy();
    expect(leftIcon.nativeElement.textContent.trim()).toBe('home');
    expect(rightIcon).toBeTruthy();
    expect(rightIcon.nativeElement.textContent.trim()).toBe('arrow_forward');
  });

  it('should render the label when provided', () => {
    component.label = 'Test Button';
    fixture.detectChanges();
    const label = fixture.debugElement.query(By.css('.label'));
    expect(label).toBeTruthy();
    expect(label.nativeElement.textContent.trim()).toBe('Test Button');
  });

  // --- Disabled & Loading States ---
  it('should reflect disabled state in class and aria-disabled', () => {
    component.disabled = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.classes['disabled']).toBeTrue();
    expect(btn.nativeElement.getAttribute('aria-disabled')).toBe('true');
  });

  it('should reflect loading state in class, aria-busy, and show spinner', () => {
    component.loading = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.classes['loading']).toBeTrue();
    expect(btn.nativeElement.getAttribute('aria-busy')).toBe('true');
    const spinner = fixture.debugElement.query(By.css('.spinner'));
    expect(spinner).toBeTruthy();
  });

  // --- Click & Disabled Behavior ---
  it('should emit clicked event when button is clicked and not disabled/loading', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    component.disabled = false;
    component.loading = false;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    btn.nativeElement.click();
    expect(emitSpy).toHaveBeenCalled();
  });

  it('should NOT emit clicked event when button is disabled', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    component.disabled = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    btn.nativeElement.click();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('should NOT emit clicked event when button is loading', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    component.loading = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    btn.nativeElement.click();
    expect(emitSpy).not.toHaveBeenCalled();
  });

  // --- Accessibility: ARIA attributes ---
  it('should set aria-disabled and aria-busy correctly', () => {
    component.disabled = true;
    component.loading = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.nativeElement.getAttribute('aria-disabled')).toBe('true');
    expect(btn.nativeElement.getAttribute('aria-busy')).toBe('true');
  });

  // --- Keyboard Accessibility ---
  it('should have tabindex -1 when disabled or loading (button)', () => {
    component.disabled = true;
    fixture.detectChanges();
    let btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.nativeElement.getAttribute('tabindex')).toBe('-1');
    component.disabled = false;
    component.loading = true;
    fixture.detectChanges();
    btn = fixture.debugElement.query(By.css('.button'));
    expect(btn.nativeElement.getAttribute('tabindex')).toBe('-1');
  });

  // --- interaction for accessibility ---
  it('should emit clicked event on Enter or Space key when not disabled/loading', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    component.disabled = false;
    component.loading = false;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    // Simulate Enter key
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    btn.nativeElement.dispatchEvent(enterEvent);
    // Simulate Space key
    const spaceEvent = new KeyboardEvent('keydown', { key: ' ' });
    btn.nativeElement.dispatchEvent(spaceEvent);
    expect(emitSpy).toHaveBeenCalledTimes(2);
  });

  it('should NOT emit clicked event on Enter/Space key when disabled', () => {
    const emitSpy = spyOn(component.clicked, 'emit');
    component.disabled = true;
    fixture.detectChanges();
    const btn = fixture.debugElement.query(By.css('.button'));
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    btn.nativeElement.dispatchEvent(enterEvent);
    expect(emitSpy).not.toHaveBeenCalled();
  });

  // --- Icon accessibility ---
  it('should render icons with aria-hidden="true" by default', () => {
    component.iconLeft = 'home';
    component.iconRight = 'arrow_forward';
    fixture.detectChanges();
    const leftIcon = fixture.debugElement.query(By.css('.icon-left'));
    const rightIcon = fixture.debugElement.query(By.css('.icon-right'));
    expect(leftIcon.attributes['aria-hidden']).toBe('true');
    expect(rightIcon.attributes['aria-hidden']).toBe('true');
  });
});