import React from 'react';
import './_Toggle.scss';
import { FlatButton } from 'material-ui/lib';
import classNames from 'classnames';

export default class Toggle extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    width: React.PropTypes.string,
    onChange: React.PropTypes.func,
    value: React.PropTypes.bool,
  };

  _setValue = (value) => {
    this.props.onChange(value);
  }

  render() {
    const primaryColor = '#54c4c6';
    const secondaryColor = '#FAFAFA';
    const classes = classNames(
      'toggle-group',
      this.props.className,
    );

    return (
      <div className={classes} style={{ width: this.props.width }}>
        <p>{this.props.label}</p>
        <FlatButton
          label={'YES'}
          onClick={() => this._setValue(true)}
          backgroundColor={ this.props.value ? primaryColor : secondaryColor }
          hoverColor={ this.props.value ? primaryColor : secondaryColor }
          labelStyle={{ color: !this.props.value ? primaryColor : secondaryColor}}
          style={{ width: '60px', height: '40px', border: 'solid 1px #E6E6E6', borderRadius: 0 }}
        />
        <FlatButton
          label={'NO'}
          onClick={() => this._setValue(false)}
          backgroundColor={ !this.props.value ? primaryColor : secondaryColor }
          hoverColor={ !this.props.value ? primaryColor : secondaryColor }
          labelStyle={{ color: this.props.value ? primaryColor : secondaryColor}}
          style={{ width: '60px', height: '40px', border: 'solid 1px #E6E6E6', borderRadius: 0 }}
        />
      </div>
    );
  }
}
