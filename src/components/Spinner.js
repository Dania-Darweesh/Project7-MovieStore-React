import React, { Component } from "react";
import "./Spinner.css";

export default class Spinner extends Component {
  render() {
    const mainDiv = "background__spiner" + " " + this.props.background || "";
    const containerClasses =
      this.props.displaySection || "" + " " + this.props.container || "";
    const spinnerClasses = "lds-roller " + this.props.spinner_item || "";
    return (
      <>
        {!this.props?.small && (
          <div className={mainDiv}>
            <div className={containerClasses}>
              <div className={spinnerClasses}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        )}
        {this?.props.small && (
          <div class="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </>
    );
  }
}
