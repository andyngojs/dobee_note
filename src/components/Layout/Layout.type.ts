type itemFlatListProps<T> = {
  item: T;
  index: number;
};

type renderItemFlatListProps<T> = ({
  item,
  index,
}: itemFlatListProps<T>) => React.ReactElement | null;

export interface LayoutProps<T> {
  buttonType: string;
  data: T[];
  renderItem: renderItemFlatListProps<T>;
  renderEmpty?: () => React.ReactElement | null;
};
