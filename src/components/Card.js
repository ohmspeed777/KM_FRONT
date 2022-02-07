import React from 'react';

const Card = ({ name, img, project }) => {
  return (
    <div className="card card-bordered">
      <figure>
        <img
          src={
            img === ''
              ? 'https://images.unsplash.com/photo-1522780300892-b25a6ec89734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
              : img
          }
          className="w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <div className="card-actions">
          <div className="badge badge-ghost">{project}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
