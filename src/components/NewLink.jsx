import React from 'react';

export default function NewLink({match}) {
  return (
    <div className="card">
      <a href={match.url + "posts/new"} className="btn">Создать пост</a>
    </div>
  )
}