import { EmotionJSX } from '@emotion/react/types/jsx-namespace';
import React from 'react';

interface ITopAppBar {
  navIcon: EmotionJSX.Element;
  short: boolean;
  prominent: boolean;
  fixed: boolean;
  alwaysCollapsed: boolean;
  title: string;
  actionItems: EmotionJSX.Element[] | null;
  style?: any;
};

interface IState {
  style: any;
};

export default class TopAppBar extends React.Component<ITopAppBar> {
  state: IState = {
    style: ''
  };


  getMergedStyles = () => {
    const { style } = this.props;
    const { style: internalStyle } = this.state;
    return Object.assign({}, internalStyle, style);
  }

  renderActionItems() {
    const { actionItems } = this.props;
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
  render() {
    const {
      title,
      navIcon,
    } = this.props;
    return (
      <header
      // className={this.classes}
      // style={this.getMergedStyles()}
      // ref={this.topAppBarElement}
      >
        <div className='mdc-top-app-bar__row'>
          <section className='mdc-top-app-bar__section mdc-top-app-bar__section--align-start'>
            {navIcon ? navIcon : null}
            <span className="mdc-top-app-bar__title">
              {title}
            </span>
          </section>
          {this.renderActionItems()}
        </div>
      </header>
    );
  }
}
