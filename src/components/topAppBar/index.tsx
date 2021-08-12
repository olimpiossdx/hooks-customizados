import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import React from 'react'

interface ITopAppBar {
  navIcon: EmotionJSX.Element;
  short: boolean;
  prominent: boolean;
  fixed: boolean;
  alwaysCollapsed: boolean;
  title: string;
  actionItems(): EmotionJSX.Element[] | null;
};

const TopAppBar: React.FC<ITopAppBar> = () => {
  return (
    <div>

    </div>
  )
}

export default TopAppBar
