import React, { Component } from 'react';
import { savedPosts } from '../posts.json';
import css from './css/Content.module.css';

export class Content extends Component {
    // eslint-disable-next-line
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className=  {css.Content}>
        <div className={css.TitleBar}>
          <h1>My Posts</h1>
        </div>
        <div className={css.SearchResults}>
          {savedPosts.map((post, index) => (
            <div key={index} className={css.searchItem}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
              <img src={post.image} alt="Post" />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
