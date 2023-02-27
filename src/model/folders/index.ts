import {INote} from '../notes';

export interface IFolder {
  id: string | number;
  name: string;
  create_at: string;
  notes: INote[];
}
