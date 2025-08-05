import { Component, Input, Output, EventEmitter } from '@angular/core';
import { notes } from '../../notes';

@Component({
  selector: 'app-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent {
  notes = notes;

  @Input() title!: string;
  @Input() content!: string;
  @Input() i!: number;

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
  }

  @Output() isOpenModal = new EventEmitter<boolean>();

  openModal() {
    this.isOpenModal.emit(true);
  }
}
