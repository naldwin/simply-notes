import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { notes } from '../../notes';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [ReactiveFormsModule],
  providers: [NotesService],
})
export class ModalComponent {
  constructor(private notesService: NotesService) {}

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
      this.notesService.addNote(noteForm);
    }
    this.noteForm.reset();
    this.modalClose.emit(false);
  }

  noteTitle = inject(NotesService).indexValues.title;
  noteContent = inject(NotesService).indexValues.content;

  editForm = new FormGroup({
    title: new FormControl(this.noteTitle),
    content: new FormControl(this.noteContent),
  });

  saveEdittedNote() {
    // const edittedForm = {
    //   // index: this.editForm.value.index,
    //   title: this.editForm.value.title,
    //   content: this.editForm.value.content,
    // };

    console.log(this.editForm.value);

    // console.log('Saving edited note:', edittedForm);
  }
}
