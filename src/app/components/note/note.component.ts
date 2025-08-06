import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { notes } from '../../notes';

@Component({
  selector: 'app-note',
  standalone: true,
  templateUrl: './note.component.html',
  styleUrl: './note.component.css',
})
export class NoteComponent implements OnInit {
  notes = notes;

  @Input({ required: true }) id!: number;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string;
  @Output() select = new EventEmitter();
  
  ngOnInit(): void {
    // console.log('Note Component Initialized with ID:', {id: this.id, title: this.title, content: this.content});  
  }

  showValues() {
    this.select.emit({ id: this.id, title: this.title, content: this.content });
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
  }
}
