import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import { INote } from '@model/notes';

import { v4 as uuidv4 } from 'uuid';


const initialState: INote[] = [
  {
    title: 'Reminder',
    content: 'djsfbcjasbcjasbcjas',
    created_at: '26-02-2023',
    folder: '',
    id: 1
  },
  {
    title: 'Reminder',
    content: 'djsfbcjasbcjasbcjas',
    created_at: '26-02-2023',
    folder: '',
    id: 2
  }
];

export const notesSlice = createSlice({
  name: 'notesList',
  initialState,
  reducers: {
    addNote: (state) => {

    }
  },
});

export const {addNote} = notesSlice.actions;

export default notesSlice.reducer;
