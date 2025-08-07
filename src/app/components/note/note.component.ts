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

  @Input({ required: true }) index!: number;
  @Input({ required: true }) title!: string;
  @Input({ required: true }) content!: string;
  @Output() editModal = new EventEmitter();

  ngOnInit(): void {}

  editNote(i: number): void {
    this.editModal.emit({
      index: i,
      title: this.title,
      content: this.content,
    });
  }

  deleteNote(index: number): void {
    this.notes.splice(index, 1);
    console.log('Deleted note at index:', index , this.notes);
  }
}
