import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IFolder } from "@model/folders";

const initialState: IFolder[] = [
  {
    name: 'todo',
    create_at: '27/02/2023',
    notes: [],
    id: '1'
  }
]

const foldersSlice = createSlice({
  name: 'folderSlice',
  initialState,
  reducers: {

  }
})

export const {} = foldersSlice.actions

export default foldersSlice.reducer
