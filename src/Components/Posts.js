import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { fetchPosts } from "../Actions/postActions";
import { Typography } from "@material-ui/core";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => {
      return (
        <Grid item xs={3} key={post.id}>
          <Paper
            style={{
              padding: 20,
              textAlign: "center"
            }}
          >
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body1">{post.username}</Typography>
            <Typography variant="subtitle1">{post.email}</Typography>
          </Paper>
        </Grid>
      );
    });
    return (
      <div>
        <Grid style={{ flexGrow: 1 }} container spacing={3}>
          {postItems}
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.posts.items
});

export default connect(
  mapStateToProps,
  { fetchPosts }
)(Posts);
