import React from "react";

let CommentBox = React.createClass({
  render() {
    return (
      <div className="commentBox">
      Pawel
      </div>
    );
  }
});

React.render(
  <CommentBox />,
  document.body
);
