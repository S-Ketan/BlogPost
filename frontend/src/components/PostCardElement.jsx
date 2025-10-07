import React, { useState } from 'react';

const PostCardElement = ({
  image = 'https://via.placeholder.com/300x180',
  title = 'Post Title',
  description = 'This is a short description of the post.',
  initialLikes = 0,
  imageHeight = 'h-44', // Tailwind height class, can be overridden
}) => {
  const [likes, setLikes] = useState(initialLikes);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    // inline-block so the card flows inside CSS columns; break-inside to avoid column breaks
    <div className="inline-block w-full break-inside-avoid border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white mb-4">
      <img src={image} alt={title} className={`${imageHeight} w-full object-cover`} />
      <div className="p-4">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        <p className="mb-4 text-gray-600">{description}</p>
        <button
          onClick={handleLike}
          className={`mr-2 px-4 py-2 rounded transition-colors ${
            liked
              ? 'bg-pink-600 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
        >
          {liked ? '♥' : '♡'} Like
        </button>
        <span>
          {likes} {likes === 1 ? 'like' : 'likes'}
        </span>
      </div>
    </div>
  );
};

export default PostCardElement;
