import React, { useState } from 'react';

const Post = ({ id, username, text, tags, onLike, onDelete, isLiked }) => {
    return (
      <div div className="post">
        <p><strong>{username}</strong></p>
        <p>{text}</p>
        <p>Tags: {tags.join(', ')}</p>
        <button onClick={onLike} className={isLiked ? 'likeButtonLiked' : 'likeButton'}>
        Like
        </button>
        <button onClick={onDelete} className='delete'>
        Delete
      </button>
      </div>
    );
  };

const PostList3 = () => {
  const [newPost, setNewPost] = useState({ username: '', text: '', tags: '' });
  const [posts, setPosts] = useState([
    { id: 1, username: 'Jack Sparrow', text: 'text', tags:['jedi', 'sith'], isLiked: false },
    {id: 2, username: 'Obi Kenobi', text:'Всё кончено, Энакин! Я стою выше тебя!', tags:['jedi'], isLiked: false},
    { id: 3, username: 'Anakin Skywalker', text: 'Ты недооцениваешь мою мощь!', tags:['sith'], isLiked: false },
  ]);
  const [selectedTags, setSelectedTags] = useState([]);

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
      tags: newPost.tags.split(',').map(tag => tag.trim()),
      isLiked: false,
    };

    setPosts((prevPosts) => [...prevPosts, newPostData]);
    setNewPost({ username: '', text: '', tags: '' });
  };

  const handleTagClick = (tag) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags((prevTags) => prevTags.filter((selectedTag) => selectedTag !== tag));
    } else {
      setSelectedTags((prevTags) => [...prevTags, tag]);
    }
  };

  const filteredPosts = selectedTags.length > 0
    ? posts.filter((post) => post.tags.some((tag) => selectedTags.includes(tag)))
    : posts;

  return (
    <div>
      <h1>Посты №3</h1>
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
        <input
          type="text"
          placeholder="Tags (через запятую)"
          value={newPost.tags}
          onChange={(e) => setNewPost({ ...newPost, tags: e.target.value })}
        />
        <button onClick={handleAddPost}>Add Post</button>
      </div>
      <div>
        <h2>Tags</h2>
        {Array.from(new Set(posts.flatMap(post => post.tags))).map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagClick(tag)}
            style={{ backgroundColor: selectedTags.includes(tag) ? 'black' : 'white', color: selectedTags.includes(tag) ? 'white' : 'black', margin: '5px' }}
          >
            {tag}
          </button>
        ))}
      </div>
      {filteredPosts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          text={post.text}
          tags={post.tags}
          onLike={() => handleLike(post.id)}
          onDelete={() => handleDelete(post.id)}
          isLiked={post.isLiked}
        />
      ))}
    </div>
  );
};

export default PostList3;
