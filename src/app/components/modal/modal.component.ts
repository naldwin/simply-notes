import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
})

export class ModalComponent {
  @Input() modalOpen!: boolean;

  @Input() id!: number;
  @Input() title!: string;
  @Input() content!: string;

  @Output() modalClose = new EventEmitter();

  emitFalseModal() {
    this.modalClose.emit(false);
  }

  saveNote() {
    
  }
}
