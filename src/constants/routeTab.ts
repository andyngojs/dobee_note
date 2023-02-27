import {IRouteTab} from '@model/RouteTab';

export const NOTE_LIST_TAB = 'note_list_tab';
export const FOLDER_LIST_TAB = 'folder_list_tab';

export const ROUTES_TAB: IRouteTab[] = [
  {
    key: NOTE_LIST_TAB,
    title: 'All',
  },
  {
    key: FOLDER_LIST_TAB,
    title: 'Folders',
  },
];
