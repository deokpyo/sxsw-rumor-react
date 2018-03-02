import React, { Component } from "react";
import { Button} from "../presentational";

export default class Footer extends Component {
  render() {
    return (
      <div className="page-footer">
        <div className="container">
          <div className="row">
            <div className="input-field col s12">
              <textarea
                id="post-input"
                className="materialize-textarea left"
                placeholder="Heard something juicy? Give us the date and time."
              />
              <Button btnClass="left" btnId="submit" btnKey="" btnText="POST" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
