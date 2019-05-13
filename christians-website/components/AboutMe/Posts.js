import React, { Component } from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Post from './Post';

const Center = styled.div`
  text-align: center;
`;
const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 50px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const ALL_POSTS_QUERY = gql`
  query ALL_POSTS_QUERY{
    posts{
      id
      title
      desc
      image
      largeImage
    }
  }
`;

 class Posts extends Component {
  render() {
    return (
      <Center>
        <Query query={ALL_POSTS_QUERY}>
          {({ data, error, loading }) => {
            if(loading) return <p>Loading...</p>;
            if(error) return <p>Error: {error.message}</p>;
            return (
            <ItemsList>{data.posts.map(post => <Post post={post}  key={post.id} />)}</ItemsList>
            );
          }}
        </Query>
      </Center>
    )
  }
}
export default Posts;