import React from "react";
import PostCardElement from "../components/PostCardElement";

const GlobalFeed = () => {
  return (
    <div className="relative min-h-screen mt-14">
      {/* Content wrapper */}
      <div className="relative z-20 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
          GlobalFeed
        </h1>
        <div className="max-w-6xl mx-auto px-4">
          {/* Responsive grid layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <PostCardElement />
            <PostCardElement />
            <PostCardElement />
            <PostCardElement />
            <PostCardElement />
            <PostCardElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobalFeed;
