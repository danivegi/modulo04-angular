import { Directive, ElementRef, HostListener, Input, OnInit, inject } from '@angular/core';

@Directive({
  selector: 'img[rotate]',
})
export class Rotate implements OnInit {
  // Rotación inicial en grados
  @Input() rotate = '';
  // Grados que gira en cada click. 10 en este caso.
  @Input() step = '';

  private readonly el = inject(ElementRef).nativeElement as HTMLElement;
  private angle = 0;

  ngOnInit(): void {
    this.angle = Number(this.rotate) || 0;
    this.el.style.transition = 'transform .3s ease';
    this.el.style.cursor = 'pointer';
    this.applyRotation();
  }

  @HostListener('click', ['$event'])
  onClick(event: MouseEvent): void {
    const stepValue = Number(this.step) || 10;   // 10 grados
    const direction = event.shiftKey ? -1 : 1;   // Si presionamos Shift, sentido contrario
    this.angle += direction * stepValue;
    this.applyRotation();
  }

  private applyRotation(): void {
    this.el.style.transform = `rotate(${this.angle}deg)`;
  }
}