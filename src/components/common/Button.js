import React, { Component } from "react";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      isPost: this.props.isPost || false
    };

    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton(event) {
    event.preventDefault();
    if (this.state.isPost) {
      this.props.btnClick(event);
    } else if (!this.state.clicked) {
      this.setState({
        clicked: true
      });
      this.props.btnClick(event);
    }
  }

  render() {
    return (
      <button
        id={this.props.btnId}
        className={this.props.btnClass}
        data-key={this.props.btnKey}
        onClick={this.onClickButton}
        value={this.props.btnText.toLowerCase()}
      >
        {this.props.btnText}
      </button>
    );
  }
}
