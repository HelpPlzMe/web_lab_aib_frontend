import React, { useState } from 'react';

const Post = ({ username, text, onLike, isLiked }) => {
  return (
    <div className="post">
      <p><strong>{username}</strong></p>
      <p>{text}</p>
      <button onClick={onLike} className={isLiked ? 'likeButtonLiked' : 'likeButton'}>
        Like
      </button>
    </div>
  );
};
const PostList = () => {
  const [posts, setPosts] = useState([
    { id: 1, username: 'Jack Sparrow', text: 'text', isLiked: false },
    {id: 2, username: 'Obi Kenobi', text:'Всё кончено, Энакин! Я стою выше тебя!', isLiked: false},
    { id: 3, username: 'Anakin Skywalker', text: 'Ты недооцениваешь мою мощь!', isLiked: false },
  ]);

  const handleLike = (postId) => {
    setPosts(prevPosts => {
      return prevPosts.map(post => {
        if (post.id === postId) {
          return { ...post, isLiked: !post.isLiked };
        }
        return post;
      });
    });
  };

  return (
    <div>
      <h1>Посты</h1>
      {posts.map(post => (
        <Post
          key={post.id}
          username={post.username}
          text={post.text}
          onLike={() => handleLike(post.id)}
          isLiked={post.isLiked}
        />
      ))}
    </div>
  );
};

export default PostList;
