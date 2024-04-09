import React from 'react';
import Article from './Article'; 

const ArticleList = (props) => {
  return (
    <section>
      <h2>Articles</h2>
      {props.articles.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </section>
  );
}

export default ArticleList;
