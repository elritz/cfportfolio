import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Router from 'next/router';
import Form from './Form';
// import Error from '../../ErrorMessage';
import styled from 'styled-components';

const SelectedImage = styled.img`
    height: 200px;
    width: 200px;
    border-radius: 25px;
    padding: 10px;
`;

const CREATE_POST_MUTATION = gql`
  mutation CREATE_POST_MUTATION(
    $title: String!
    $desc: String
    $image: String
    $largeImage: String
  ) {
    createPost(
      title: $title
      desc: $desc
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

class CreatePost extends Component {
  state = {
    title: '',
    desc: '',
    image: '',
    largeImage: '',
};
handleChange = e => {
  const { name, type, value } = e.target;
  const val = type === 'number' ? parseFloat(value) : value
  this.setState({ [name]: val });
  console.log({name, type, value})
}
    //Uploading image
    uploadFile = async e => {
      const files = e.target.files;
      const data = new FormData();
      data.append('file', files[0]);
      data.append('upload_preset', 'sickfits');

      const res = await fetch('https://api.cloudinary.com/v1_1/ritz/image/upload', {
          method: 'POST',
          body: data
      });
      const file = await res.json();
      // console.log(file);
      this.setState({
          image: file.secure_url,
          largeImage: file.eager[0].secure_url
      });
  };

  render() {
    return (
      <Mutation mutation={CREATE_POST_MUTATION} variables={this.state}>
        {(createPost, { loading, error }) => (
          <Form onSubmit={async(e) => {
            //Stop form from submiting
            e.preventDefault();
            // call the mutation
            const res = await createPost();
            console.log(res);
            // Show them the single item page
            Router.push({
                pathname: '/post',
                query: { id: res.data.createPost.id }
            })
        }}>
          {/* <Error error={error} /> */}
            <fieldset disabled={loading} aria-busy={loading}>
            <label htmlFor="file">
                    Title
                        <input 
                        type="file"
                        id="image"
                        name="image"
                        placeholder="Image"
                        required
                        // value={this.state.image}
                        onChange={this.uploadFile}
                        />
              {this.state.image && <SelectedImage src={this.state.image} alt={this.state.title}/> }
              </label>
              <label htmlFor="title">
                    Title
                        <input 
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Title"
                        required
                        value={this.state.title}
                        onChange={this.handleChange}
                        />
              </label>
              <label htmlFor="desc">
                    Description
                        <textarea 
                        type="text"
                        id="desc"
                        name="desc"
                        placeholder="Description"
                        required
                        value={this.state.desc}
                        onChange={this.handleChange}
                        />
                    </label>
              <button type="submit">Submit</button>
            </fieldset>
          </Form>
        )}
      </Mutation>
    )
  }
}
export default CreatePost;
export { CREATE_POST_MUTATION }
