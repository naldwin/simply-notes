import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NoteComponent } from './components/note/note.component';
import { ModalComponent } from './components/modal/modal.component';
import { notes } from './notes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, NoteComponent, FooterComponent, ModalComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'naldwin-app';
  notes = notes;
  bool: boolean = false;

  openModal($event: boolean): void {
    console.log('Modal opened:', $event);
    this.bool = $event;
  }

}