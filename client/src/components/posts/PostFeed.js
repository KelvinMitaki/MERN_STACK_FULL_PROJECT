import React, { Component } from "react";
import PostItem from "./PostItem";

export class PostFeed extends Component {
  render() {
    const { posts } = this.props;

    return (
      <div>
        {posts.map(post => (
          <PostItem key={post._id} post={post} />
        ))}
      </div>
    );
  }
}

export default PostFeed;
