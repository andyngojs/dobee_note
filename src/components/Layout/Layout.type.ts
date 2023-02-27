import {INote} from '@model/notes';

export interface LayoutProps {
  buttonType: string;
  data: INote[];
  renderItem: ({
    item,
    index,
  }: {
    item: INote;
    index: number;
  }) => React.ReactElement | null;
  renderEmpty?: () => React.ReactElement | null;
}
