import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})
export class ModalComponent {
  @Input() isOpenModal!: boolean;
  @Input() str!: string;
  @Output() isOpenModalChange = new EventEmitter<boolean>();
  closeModal() {
    this.isOpenModal = false;
    this.isOpenModalChange.emit(this.isOpenModal);
  }
}
