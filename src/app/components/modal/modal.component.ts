import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { notes } from '../../notes';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [ReactiveFormsModule],
})
export class ModalComponent {
  @Input() modalOpen!: boolean;
  @Input() modalMode!: string;
  @Input() noteIndex!: number;
  @Input() title!: string;
  @Input() content!: string;

  @Output() modalClose = new EventEmitter();

  emitFalseModal() {
    this.modalClose.emit(false);
  }

  noteForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
  });

  saveNote() {
    const noteForm = {
      title: this.noteForm.value.title ?? '',
      content: this.noteForm.value.content ?? '',
    };
    if (
      this.noteForm.value.title != null ||
      this.noteForm.value.content != null
    ) {
      if (this.noteForm.value.title === null) {
        noteForm.title = 'Untitled Note';
      }
      notes.unshift(noteForm);
      console.log('Note saved:', noteForm);
    }
    this.noteForm.reset();
    this.modalClose.emit(false);
  }

  editForm = new FormGroup({
    index: new FormControl(this.noteIndex),
    title: new FormControl(this.title),
    content: new FormControl(this.content),
  });

  // To edit/recode
  saveEdittedNote() {
    const edittedForm = {
      index: this.editForm.value.index,
      title: this.editForm.value.title,
      content: this.editForm.value.content,
    }
    console.log('Saving edited note:', edittedForm);
  }
}
