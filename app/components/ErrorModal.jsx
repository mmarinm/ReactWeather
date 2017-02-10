import React from "react";

export class ErrorModal extends React.Component {
  componentDidMount() {
    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{this.props.title}</h4>
        <p>{this.props.message}</p>
        <div>
          <button className="button hollow" data-close="">
            Ok
          </button>
        </div>
      </div>
    );
  }
}
