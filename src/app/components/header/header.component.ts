import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})

export class HeaderComponent {
  @Output() isOpenModal = new EventEmitter<boolean>();

  openModal() {
    this.isOpenModal.emit(true);
  } 
}
 