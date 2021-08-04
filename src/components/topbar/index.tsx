import React, { useCallback, useRef, useState } from 'react';
import classnames from 'classnames';
import { MDCTopAppBarFoundation, MDCFixedTopAppBarFoundation, MDCShortTopAppBarFoundation } from '@material/top-app-bar';

interface ITopBar {
  alwaysCollapsed: any;
  className: any;
  short: any;
  fixed: any;
  prominent: any;
  actionItems: any[];
  style: any;
  title: any;
  navIcon: any;
}

const TopBar: React.FC<ITopBar> = ({
  alwaysCollapsed,
  className,
  short,
  fixed,
  prominent,
  actionItems,
  style,
  title,
  navIcon
}) => {

  let foundation: any = null;
  const topAppBarElement = useRef<any>();
  const [classList, setClassList] = useState<Set<any>>(new Set<any>());
  const [internalStyle, setInternalStyle] = useState({});

  const getClassses = () => {
    return classnames('mdc-top-app-bar', Array.from(classList), className, {
      'mdc-top-app-bar--fixed': fixed,
      'mdc-top-app-bar--short': short,
      'mdc-top-app-bar--short-collapsed': alwaysCollapsed,
      'mdc-top-app-bar--prominent': prominent,
    });
  };


  const setStyle = (varName: any, value: any) => {
    const updatedStyle = Object.assign({}, style);
    updatedStyle[varName] = value;
    setInternalStyle(updatedStyle);
  }

  const adapter = () => {
    return {
      hasClass: (className: any) => getClassses().split(' ').includes(className),
      addClass: (className: any) => setClassList((state) => state?.add(className)),
      removeClass: (className: any) => {
        classList.delete(className);
        setClassList(classList);
      },
      setStyle: setStyle,
      getTopAppBarHeight: () => topAppBarElement.current.clientHeight,
      registerScrollHandler: (handler: any) => window.addEventListener('scroll', handler),
      deregisterScrollHandler: (handler: any) => window.removeEventListener('scroll', handler),
      registerResizeHandler: (handler: any) => window.addEventListener('resize', handler),
      deregisterResizeHandler: (handler: any) => window.removeEventListener('resize', handler),
      getViewportScrollY: () => window.pageYOffset,
      getTotalActionItems: () => actionItems && actionItems.length,
    };
  };

  const initializeFoundation = useCallback(() => {
    if (short) {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      foundation = new MDCShortTopAppBarFoundation(adapter);
    } else if (fixed) {
      foundation = new MDCFixedTopAppBarFoundation(adapter);
    } else {
      foundation = new MDCTopAppBarFoundation(adapter);
    }
    foundation.init()
  }, []);



  const getMergedStyles = () => Object.assign({}, internalStyle, style);

  React.useEffect(() => {
    initializeFoundation()
    return () => {
      foundation.destroy();
    }
  }, [foundation, initializeFoundation]);

  function renderActionItems() {
    if (!actionItems) {
      return;
    }

    return (
      <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-end' role='toolbar'>
        {/* need to clone element to set key */}
        {actionItems.map((item, key) => React.cloneElement(item, { key }))}
      </section>
    );
  }

  return (
    <header
      className={getClassses()}
      style={getMergedStyles()}
      ref={topAppBarElement}
    >
      <div className='mdc-top-app-bar__row'>
        <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
          {navIcon ? navIcon : null}
          <span className="mdc-top-app-bar__title">
            {title}
          </span>
        </section>
        {renderActionItems()}
      </div>
    </header>
  )
}

export default TopBar;
