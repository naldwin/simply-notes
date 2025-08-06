import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  @Output() isOpenModal = new EventEmitter();

  openModal() {
    this.isOpenModal.emit(true);
  } 
}
 