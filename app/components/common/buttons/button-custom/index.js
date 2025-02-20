import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

class ButtonCustom extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    className: PropTypes.string,
  };

  static defaultProps = {
    disabled: false,
  };

  render() {
    const { className, ...otherProps } = this.props;
    const ButtonCustomDom = styled(Button)`
      font-size: 14px;
      font-family: "Inter-Bold";
      font-style: normal;
      color: ${this.props.color ? this.props.color : "#F23E5F"};
      border: ${this.props.border ? this.props.border : "none"};
      width: ${this.props.width ? this.props.width : "auto"};
      height: ${this.props.height ? this.props.height : "auto"};
      background: ${this.props.background ? this.props.background : "auto"};
    `;
    return (
      <div className={className}>
        <ButtonCustomDom
          disabled={this.props.disabled}
          onClick={this.props.onClick}
          {...otherProps}
        >
          {this.props.children}
        </ButtonCustomDom>
      </div>
    );
  }
}

export default ButtonCustom;
