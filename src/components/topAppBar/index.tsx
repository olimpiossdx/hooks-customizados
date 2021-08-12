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

  function adapter() {
    return {
      hasClass: (className: string) => classes.split(' ').includes(className),
      addClass: (className: any) => setstate({ ...state, classList: state.classList.add(className) }),
      removeClass: (className) => {
        const { classList } = state;
        classList.delete(className);
        setstate({ ...state, classList: classList });
      },
      setStyle: this.setStyle,
      getTopAppBarHeight: () => this.topAppBarElement.current.clientHeight,
      registerScrollHandler: (handler) => window.addEventListener('scroll', handler),
      deregisterScrollHandler: (handler) => window.removeEventListener('scroll', handler),
      registerResizeHandler: (handler) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler) => window.removeEventListener('resize', handler),
      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () => actionItems && actionItems.length,
    };
  }

  const initializeFoundation = () => {
    if (short) {
      this.foundation_ = new MDCShortTopAppBarFoundation(this.adapter);
    } else if (this.props.fixed) {
      this.foundation_ = new MDCFixedTopAppBarFoundation(this.adapter);
    } else {
      this.foundation_ = new MDCTopAppBarFoundation(this.adapter);
    }

    this.foundation_.init();
  }

  useEffect(() => {
    effect
    return () => {
      cleanup
    }
  }, [input])

  return (
    <div>

    </div>
  )
}

export default TopAppBar
