import React, { useEffect, useState } from 'react'
import TopAppBar from '.';

interface IAnyState { [x: string]: any; }

interface IState {
  isFixed: boolean;
  isShort: boolean;
  isRtl: boolean;
  isProminent: boolean;
  isAlwaysCollapsed: boolean;
  noActionItems: boolean;
  shouldReinit: boolean;
};

interface ICheckbox {
  title: string;
  attr: string;
  disabled?: boolean;
};

const AppTop: React.FC = () => {
  const [state, setState] = useState<IAnyState>({
    isFixed: false,
    isShort: false,
    isRtl: false,
    isProminent: false,
    isAlwaysCollapsed: false,
    noActionItems: false,
    shouldReinit: false
  });

  function actionItems() {
    const { isShort, noActionItems } = state;
    if (noActionItems) {
      return null;
    }

    const actionItems = [
      <a href='*' className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page' >bookmark</a>
    ];

    // Top App Bar Spec allows for only 1 action item with the short variant
    if (!isShort) {
      // [].push.apply(actionItems, [
      //   <a href='*' className='material-icons mdc-top-app-bar__action-item' aria-label='Download'>file_download</a>,
      //   <a href='*' className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' >print</a>,
      // ]);
    }
    return actionItems;
  }

  function renderDemoParagraphs() {
    const createDemoParagraph = (key: any) => (<p key={key}>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames
      ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget,
      tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Pellentesque habitant morbi tristique senectus et
      netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
      vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. Aenean ultricies mi vitae est.
    </p>);
    const size = 20;
    const tags = Array.from(Array(size).keys());
    return tags.map((tag, key) => createDemoParagraph(key));
  };

  function renderNavIcon() {
    return (
      <a
        className='material-icons mdc-top-app-bar__navigation-icon'
        href='*'
        onClick={() => { console.log('nav icon clicked') }}>
        menu
      </a>
    );
  };

  function renderControlCheckbox({ title, attr, disabled = false }: ICheckbox, key: number) {
    const labelId = `${title}-${key}`;

    return (
      <div key={key}
        className={`demo-control-checkbox ${disabled ? 'demo-control-checkbox--disabled' : ''}`}>
        <label htmlFor={labelId}
          className='demo-control-checkbox__label'>
          {title}
        </label>
        <input type='checkbox'
          disabled={disabled}
          id={labelId}
          onClick={(evt: any) => setState({ [attr]: evt.target.checked })} />
      </div>
    );
  };

  function renderControls() {
    const { isShort, isProminent, isAlwaysCollapsed } = state;

    const checkboxes = [{
      title: 'Fixed',
      attr: 'isFixed',
    }, {
      title: 'Short',
      attr: 'isShort',
      disabled: isProminent || isAlwaysCollapsed,
    }, {
      title: 'Always Collapsed',
      attr: 'isAlwaysCollapsed',
      disabled: !isShort,
    }, {
      title: 'RTL',
      attr: 'isRtl',
    }, {
      title: 'Prominent',
      attr: 'isProminent',
      disabled: isShort,
    }, {
      title: 'No Action Items',
      attr: 'noActionItems',
    }];

    return (
      <div className='demo-controls-box'>
        <h3 className='mdc-typography--title'>
          Controls
        </h3>

        {checkboxes.map((checkbox, key) => renderControlCheckbox(checkbox, key))}
      </div>
    );
  }
  const { isFixed, isShort, isRtl, isProminent, isAlwaysCollapsed, shouldReinit } = state;
  return (
    <section
      dir={isRtl ? 'rtl' : 'ltr'}
      className='mdc-typography'>
      {
        shouldReinit ? null :
          <TopAppBar
            navIcon={renderNavIcon()}
            short={isShort}
            prominent={isProminent}
            fixed={isFixed}
            alwaysCollapsed={isAlwaysCollapsed}
            title='Mountain View, CA'
            actionItems={actionItems}
          />
      }
      <div className={classnames('mdc-top-app-bar--fixed-adjust', {
        'mdc-top-app-bar--short-fixed-adjust': isShort || isAlwaysCollapsed,
        'mdc-top-app-bar--prominent-fixed-adjust': isProminent,
      })}>
        {renderDemoParagraphs()}
      </div>

      {renderControls()}
    </section>
  )
};

export default AppTop;
function classnames(arg0: string, arg1: { 'mdc-top-app-bar--short-fixed-adjust': boolean; 'mdc-top-app-bar--prominent-fixed-adjust': boolean; }): string | undefined {
  throw new Error('Function not implemented.');
}

