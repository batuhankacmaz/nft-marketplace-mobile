import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/core';

type FocusedStatusBarProps = {
  background: string;
};

const FocusedStatusBar = (props: FocusedStatusBarProps) => {
  const IsFocused = useIsFocused();
  console.log('IsFocused', IsFocused);
  return IsFocused ? <StatusBar animated={true} {...props} /> : null;
};

export default FocusedStatusBar;
