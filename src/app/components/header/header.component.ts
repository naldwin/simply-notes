import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  @Output() addModal = new EventEmitter();

  emitTrueModal() {
    this.addModal.emit();
  } 
}
 