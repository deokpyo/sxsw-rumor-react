import React, { Component } from "react";
import { TopFeeds, Feed } from "./index";
import { Title, Loader } from "../common";
import fire from "../../fire";
import { compare } from "../../utils";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topFeed: [],
      feedArray: [],
      feedMap: {}
    };
    this.onClickFeedBtn = this.onClickFeedBtn.bind(this);
  }

  componentDidMount() {
    // get all feeds
    fire
      .database()
      .ref()
      .orderByChild("timestamp")
      .on("value", snapshot => {
        const feeds = snapshot.val();
        const feedsArray = [];
        for (let i in feeds) {
          const feedsObject = {
            key: i,
            data: feeds[i]
          };
          feedsArray.unshift(feedsObject);
        }
        this.setState({
          feedArray: feedsArray,
          feedMap: feeds
        });
      });

    // get top three feeds
    fire
      .database()
      .ref()
      .orderByChild("likes/legit")
      .limitToLast(3)
      .on("value", snapshot => {
        const feeds = snapshot.val();
        let topFeed = [];
        for (let i in feeds) {
          topFeed.unshift(feeds[i]);
        }
        this.setState({
          topFeed: topFeed
        });
      });
  }

  onClickFeedBtn(event) {
    const type = event.target.value;
    const key = event.target.dataset.key;
    let currentFeed = this.state.feedMap[key];
    let counter = currentFeed.likes[type];
    counter++;
    let updatedLikes = {};
    updatedLikes[type] = counter;
    fire
      .database()
      .ref(key + "/likes")
      .update(updatedLikes);
  }

  render() {
    const feed = this.state.feedArray.map((feed, index) => {
      let key = feed.key;
      let data = feed.data;
      return (
        <Feed
          key={index}
          feedKey={key}
          feedDate={data.date}
          feedText={data.input}
          onClickFeedBtn={this.onClickFeedBtn}
        />
      );
    });
    let topFeedArray = Object.assign([], this.state.topFeed);
    topFeedArray.sort(compare);
    const topFeed = topFeedArray.map((feed, index) => {
      const counter = feed.likes.legit - feed.likes.shit;
      return (
        <TopFeeds
          key={index}
          feedDate={feed.date}
          feedIndex={index + 1}
          feedText={feed.input}
          feedCount={counter}
        />
      );
    });

    return (
      <div className="container" id="main">
        <Title text={"Top Rumors"} />
        <div id="top-posts">{topFeed}</div>
        <div className="divider" />
        <Title text={"Feed"} />
        <div id="recent-posts">{feed}</div>
      </div>
    );
  }
}
