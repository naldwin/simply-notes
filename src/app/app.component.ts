import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteComponent } from './components/note/note.component';
import { ModalComponent } from './components/modal/modal.component';
import { NotesService } from './notes.service';
import { notes } from './notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NoteComponent, FooterComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [NotesService],
})
export class AppComponent {
  constructor(private notesService: NotesService) {}

  title = 'naldwin-app';
  notes = notes;
  isModalOpen: boolean = false;
  modalMode!: string;
  modalOpen!: boolean;
  noteIndex!: number;
  noteTitle!: string;
  noteContent!: string;

  editModal(event: any) {
    this.noteIndex = event.index;
    this.noteTitle = event.title;
    this.noteContent = event.content;
    console.log('Editing Note:', this.noteIndex);
    this.notesService.toEdit(this.noteIndex);

    this.isModalOpen = true;
    this.modalMode = 'edit';
  }

  openAddModal() {
    this.isModalOpen = true;
    this.modalMode = 'add';
    console.log('Add Note Opened');
  }

  closeModal(event: boolean) {
    this.isModalOpen = event;
    this.noteIndex = 0;
    this.noteTitle = '';
    this.noteContent = '';
  }
}
