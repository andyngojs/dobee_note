import {configureStore} from '@reduxjs/toolkit';

import notesReducer from '@components/NoteList/features/notesSlice';
import folderReducer from '@components/FolderList/features/foldersSlice';

export const store = configureStore({
  reducer: {
    notes: notesReducer,
    folders: folderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
