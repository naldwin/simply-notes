import {
  Component,
  Input,
  Output,
  EventEmitter,
  inject,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { notes } from '../../notes';
import { NotesService } from '../../notes.service';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css',
  imports: [ReactiveFormsModule],
})
export class ModalComponent {
  constructor(private notesService: NotesService) {}

  @Input() modalOpen!: boolean;
  @Input() modalMode!: string;
  @Input() noteIndex!: number;
  @Input() title!: string;
  @Input() content!: string;
  @Output() modalClose = new EventEmitter();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['title'] || changes['content']) {
      this.editForm.patchValue({
        title: this.title,
        content: this.content,
      });
    }
  }

  emitFalseModal() {
    this.modalClose.emit(false);
  }

  noteForm = new FormGroup({
    title: new FormControl(),
    content: new FormControl(),
  });

  saveNote() {
    const noteForm = {
      title: this.noteForm.value.title || 'Untitled Note',
      content: this.noteForm.value.content || '',
    };
    this.notesService.addNote(noteForm);
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
    const updatedNote = {
      title: this.editForm.value.title || 'Untitled Note',
      content: this.editForm.value.content || '',
    };
    this.notesService.editNote(this.noteIndex, updatedNote);
    this.editForm.reset();
    this.modalClose.emit(false);
  }
}
