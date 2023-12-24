import React, { useState } from 'react';
const Post = ({ username, text, onLike, onDelete, isLiked }) => {
    return (
      <div className="post">
        <p><strong>{username}</strong></p>
        <p>{text}</p>
        <button onClick={onLike} className={isLiked ? 'likeButtonLiked' : 'likeButton'}>
          Like
        </button>
        <button onClick={onDelete} className='delete'>
        Delete
      </button>
      </div>
    );
  };
  const PostList2 = () => {
    const [newPost, setNewPost] = useState({ username: '', text: '' });
    const [posts, setPosts] = useState([
      { id: 1, username: 'Кто-то', text: 'Что-то', isLiked: false },
      { id: 2, username: 'Еще кто-то', text: 'Еще что-то', isLiked: false },
    ]);
  
    const handleLike = (postId) => {
      setPosts((prevPosts) => {
        return prevPosts.map((post) => {
          if (post.id === postId) {
            return { ...post, isLiked: !post.isLiked };
          }
          return post;
        });
      });
    };
  
    const handleDelete = (postId) => {
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    };
  
    const handleAddPost = () => {
      const newPostData = {
        id: posts.length + 1,
        ...newPost,
        isLiked: false,
      };
  
      setPosts((prevPosts) => [...prevPosts, newPostData]);
      setNewPost({ username: '', text: '' });
    };
  
    return (
      <div>
        <h1>Посты №2</h1>
        <div className='input'>
          <input
            type="text"
            placeholder="Username"
            value={newPost.username}
            onChange={(e) => setNewPost({ ...newPost, username: e.target.value })}
          />
          <input
            type="text"
            placeholder="Text"
            value={newPost.text}
            onChange={(e) => setNewPost({ ...newPost, text: e.target.value })}
          />
          <button onClick={handleAddPost} className='add'>Add Post</button>
        </div>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.username}
            text={post.text}
            onLike={() => handleLike(post.id)}
            onDelete={() => handleDelete(post.id)}
            isLiked={post.isLiked}
          />
        ))}
      </div>
    );
  };
export default PostList2;