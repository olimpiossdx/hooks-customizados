import React, { ChangeEvent, useState } from 'react'
import Button from '../../components/button';
import Form from '../../components/form';

// import InputField2 from '../../form/InputBase2'
// import InputField4 from '../../form/inputBase4'
import InputField3 from '../../components/form/inputBase3'
import TopAppBar from '../../components/topbar';
import TopBar from '../../components/topbar';


const FormValidation = () => {
  const [state, setState] = useState<any>({
    isFixed: false,
    isShort: false,
    isRtl: false,
    isProminent: false,
    isAlwaysCollapsed: false,
    noActionItems: false,
    shouldReinit: false
  });

  const [text, setText] = useState('asd')
  const model = { email: 'minhasenha' };

  // eslint-disable-next-line no-control-regex
  const emailRegExp = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {

    console.log(event.target.value);
    console.log(event.target);
  };

  const handelChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value)
  };


  function actionItems() {
    const { isShort, noActionItems } = state;
    if (noActionItems) {
      return [];
    }

    const actionItems = [
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Bookmark this page'>bookmark</a>,
    ];

    // Top App Bar Spec allows for only 1 action item with the short variant
    if (!isShort) {
      // [].push.apply(actionItems, [
      //   <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Download' alt='Download'>file_download</a>,
      //   <a href='#' className='material-icons mdc-top-app-bar__action-item' aria-label='Print this page' alt='Print this page'>print</a>,
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
  }


  function renderControlCheckbox({ title, attr, disabled = false }: { title: any, attr: any, disabled?: boolean }, key: any) {
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
  }

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


  function renderNavIcon() {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a
        className='material-icons mdc-top-app-bar__navigation-icon'
        href='#'
        onClick={() => { console.log('nav icon clicked') }}>
        menu
      </a>
    );
  }

  const { isFixed, isShort, isRtl, isProminent, isAlwaysCollapsed, shouldReinit } = state;
  return (<Form>
    {/* <p>
      Adicionar validações para formulários;
    </p>
    <br />
    <InputField3
      type='password'
      id='mail'
      name='password'
      label='Please enter an email address:'
      className='password'
      onChange={handelChange}
      defaultValue={model.email}
      required
      validated={emailRegExp} />
    <br />
    <InputField3 type='text' id='text' className='mail' name='nome'
      onChange={handelChangeText} value={text}
    />
    <InputField4 />
    <Button >
      variant ext
    </Button>
    <Button>
      variant outlined
    </Button>
    <Button >
      variant cont
    </Button> */}

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
            actionItems={actionItems()}
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

  </Form>)
}

export default FormValidation
function classnames(arg0: string, arg1: { 'mdc-top-app-bar--short-fixed-adjust': boolean; 'mdc-top-app-bar--prominent-fixed-adjust': boolean; }): string | undefined {
  throw new Error('Function not implemented.');
}

