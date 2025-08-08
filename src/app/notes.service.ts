import { Injectable } from '@angular/core';
import { notes } from './notes';

@Injectable({
    providedIn: 'root',
})

export class NotesService {
    indexValues = { index: 0, title: 'Empty Title', content: 'Empty Content' };

    toEdit(index:number){
        console.log('From notes service: editing Note at ', index);
        this.indexValues.index = index; // ✅ Store index
        this.indexValues.title = notes[index].title;
        this.indexValues.content = notes[index].content;
        console.log('Index value: ', this.indexValues)
    }

  getNote(index: number) {
    return notes;
  }

  addNote(note: { title: string; content: string }) {
    notes.unshift(note);
    console.log('Note added:', note);
  }

  editNote(index: number, note: { title: string; content: string }) {
    notes[index] = note;
    console.log('Note edited:', note);
  }
}