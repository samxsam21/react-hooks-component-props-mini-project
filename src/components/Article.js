import React from 'react';

const Article = (props) => {
  const { title, content, minutesToRead } = props.article;
  const emoji = minutesToRead < 30 ? '⏱️' : '📖';

  return (
    <article>
      <h3>{title}</h3>
      <p>{content}</p>
      <p>{`${emoji} ${minutesToRead} min read`}</p>
    </article>
  );
}

export default Article;
