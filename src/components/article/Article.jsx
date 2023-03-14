import React from 'react';
import './article.css';


const Article = ({ imgUrl, date, text }) => (
  <div className="gpt3__blog-container_article">
    <div className="gpt3__blog-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="gpt3__blog-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p><a href="https://www.datacamp.com/blog/a-beginners-guide-to-gpt-3">Read Full Article</a></p>
    </div>
  </div>
);

export default Article;

// blog features footer