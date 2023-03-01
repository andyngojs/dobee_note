import React from 'react';

import {useAppSelector} from '@app/hooks';

const useNoteListHook = () => {
  const notes = useAppSelector(state => state.notes);

  return {
    notes,
  };
};

export default useNoteListHook;
