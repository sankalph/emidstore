import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form id="request-form">
        <div className="row form-wrapper">
          <div
            className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
            id="edit-contact"
          >
            <div className="contactForm-caption form-wrapper" id="edit-title">
              <h1 style={{ color: "green" }}>Contact details</h1>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block contactForm-block--require">
                <input
                  className="contactForm-input form-text inactive"
                  required
                  placeholder="Full Name"
                  onChange={event => this.handleData(event)}
                  type="text"
                  name="name"
                />
                <span className="contactForm-correct" title="Correct" />
                <span className="contactForm-del" title="Clear" />
              </div>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block">
                <input
                  className="contactForm-input form-text inactive"
                  tabIndex={2}
                  type="text"
                  name="company"
                  onChange={event => this.handleData(event)}
                  placeholder="Company / Organization"
                />
              </div>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block">
                <input
                  className="contactForm-input inactive form-text"
                  tabIndex={3}
                  type="text"
                  name="phone"
                  onChange={event => this.handleData(event)}
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block contactForm-block--require">
                <input
                  className="contactForm-input inactive form-text required"
                  tabIndex={4}
                  type="text"
                  name="email"
                  onChange={event => this.handleData(event)}
                  placeholder="Email"
                  required
                />
                <span className="contactForm-correct" title="Correct" />
                <span className="contactForm-del" title="Clear" />
              </div>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block contactForm-block--require">
                <select
                  placeholder="Country"
                  tabIndex={-1}
                  id="edit-country"
                  name="state"
                  onChange={event => this.handleData(event)}
                  className="form-select required"
                >
                  <option value="US">United States</option>
                  <option value="UNITED KINGDOM">United Kingdom</option>
                  <option value="INDIA">India</option>
                </select>
                <div className="selectarrow">
                  <b />
                </div>
                <span className="contactForm-correct" title="Correct" />
                <span className="contactForm-del" title="Clear" />
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-sm-12 col-xs-12 contactForm-col form-wrapper"
            id="edit-request"
          >
            <div
              className="contactForm-caption form-wrapper"
              id="edit-title--2"
            >
              <h4>Request details</h4>
            </div>
            <div className="contactForm-line">
              <div className="contactForm-block contactForm-block--require">
                <textarea
                  className="contactForm-textarea form-textarea required inactive"
                  onChange={event => this.handleData(event)}
                  tabIndex={6}
                  id="edit-message"
                  name="details"
                  placeholder="Please describe your requirements"
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div
            className="form-actions form-wrapper text-center"
            id="edit-actions--3"
          >
            <div
              className="col-md-12 col-sm-12 col-xs-12 form-wrapper"
              id="edit-grid--3"
            >
              <div
                className="contactForm-button form-wrapper"
                id="edit-button--3"
              >
                <button
                  type="submit"
                  id="edit-submit--3"
                  name="submit"
                  onClick={event => this.onSubmit(event)}
                  value="Submit"
                >
                  Submit
                </button>
              </div>
              <div className="contactForm-note form-wrapper" id="edit-note--3">
                <span className="contactForm-sign">
                  <span className="contactForm-star">*</span>— means required
                  fields
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
