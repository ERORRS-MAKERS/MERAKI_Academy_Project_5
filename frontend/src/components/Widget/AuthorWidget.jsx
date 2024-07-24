import React from 'react';

export default function AuthorWidget({ imgUrl, name, description }) {
  return (
    <div className="cs_author">
      <div className="cs_author_img">
        <img src={imgUrl} alt={name} />
      </div>
      <div className="cs_author_right">
        <h3>{name}</h3>
        <p className="mb-0">{description}</p>
      </div>
    </div>
  );
}
