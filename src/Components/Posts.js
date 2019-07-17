import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { connect } from "react-redux";
import { fetchPosts } from "../Actions/postActions";
import {
  Typography,
  Container,
  Card,
  CardMedia,
  CardContent
} from "@material-ui/core";

class Posts extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => {
      return (
        <Grid item xs={12} sm={6} md={3} key={post.id}>
          <Card>
            <CardMedia
              style={{ height: 400 }}
              image="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909__340.png"
              title="avatar"
            />
            <CardContent>
              <Typography variant="h6">{post.name}</Typography>
              <Typography variant="body1">{post.username}</Typography>
              <Typography variant="subtitle1">{post.email}</Typography>
            </CardContent>
          </Card>
        </Grid>
      );
    });
    return (
      <Container maxWidth="xl" style={{ marginTop: 30, marginBotton: 30 }}>
        <Grid style={{ flexGrow: 1 }} container spacing={3}>
          {postItems}
        </Grid>
      </Container>
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
