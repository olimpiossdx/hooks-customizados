import { EmotionJSX } from '@emotion/react/types/jsx-namespace'
import React, { useRef, useState } from 'react'

interface ITopAppBar {
  navIcon: EmotionJSX.Element;
  short: boolean;
  prominent: boolean;
  fixed: boolean;
  alwaysCollapsed: boolean;
  title: string;
  actionItems(): EmotionJSX.Element[] | null;
  className?: any;
};

const TopAppBar: React.FC<ITopAppBar> = ({ alwaysCollapsed = false, short = false, fixed = false, prominent = false, title = '', actionItems = null, navIcon = null, className }) => {
  const [foundation_, setFoundation_] = useState(null);
  const topAppBarElement = useRef();
  const [state, setstate] = useState({ classList: new Set(), style: {} });

  function classes() {
    const { classList } = state;

    return className('mdc-top-app-bar', Array.from(classList), className, {
      'mdc-top-app-bar--fixed': fixed,
      'mdc-top-app-bar--short': short,
      'mdc-top-app-bar--short-collapsed': alwaysCollapsed,
      'mdc-top-app-bar--prominent': prominent,
    });
  };

  return (
    <div>

    </div>
  )
}

export default TopAppBar
