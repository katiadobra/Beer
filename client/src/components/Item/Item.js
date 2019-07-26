import React from 'react';
import './Item.scss';

const Item = () => {
  return (
    <article className="list-item">
      <div>
        <img src="https://via.placeholder.com/240x180" alt="img" />
      </div>
      <h1>Item name</h1>
      <a href="/">Details page</a>
    </article>
  );
};

export default Item;
