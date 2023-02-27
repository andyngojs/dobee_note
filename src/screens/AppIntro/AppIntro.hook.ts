import React, {useCallback} from 'react';

import {AppIntroProps} from '.';

interface IUseAppIntro extends AppIntroProps {}

type useAppIntroProps = Omit<IUseAppIntro, 'route'>;

export default function useAppIntroHook({navigation}: useAppIntroProps) {
  const {reset} = navigation;

  const handlePressGetStarted = useCallback(() => {
    reset({
      routes: [{ name: 'Home' }],
    });
  }, [reset]);

  return {
    handlePressGetStarted,
  };
}
