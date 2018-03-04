import React, { Component } from "react";
import { Button } from "../common";
import fire from "../../fire";
import moment from "moment";

export default class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: ""
    };
    this.onPostInputChange = this.onPostInputChange.bind(this);
    this.onButtonSubmit = this.onButtonSubmit.bind(this);
  }

  onPostInputChange(event) {
    this.setState({
      post: event.target.value
    });
  }

  onButtonSubmit(event) {
    event.preventDefault();
    if (this.state.post.length === 0) {
      alert("Please fill out your post");
      return;
    }
    const currentDate = moment(new Date()).format("MMMM Do");
    fire
      .database()
      .ref()
      .push({
        input: this.state.post,
        date: currentDate,
        likes: {
          legit: 0,
          shit: 0
        }
      });

    this.setState({
      post: ""
    });
  }

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
                onChange={this.onPostInputChange}
                value={this.state.post}
              />
              <Button
                btnClass="left"
                btnId="submit"
                btnKey=""
                btnText="POST"
                btnClick={this.onButtonSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
