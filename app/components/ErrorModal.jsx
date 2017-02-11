import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";


export class ErrorModal extends React.Component {
  componentDidMount() {
    const modalMarkup = (
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
    const $modal = $(ReactDOMServer.renderToString(modalMarkup));
    $(ReactDOM.findDOMNode(this)).html($modal);

    const modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  }

  render() {
    return (
      <div></div>
    );
  }
}
