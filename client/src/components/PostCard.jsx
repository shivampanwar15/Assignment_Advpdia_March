import React from 'react';

function PostCard({ title, content, date}) {
  return (
    <div className='outline-gray-100 bg-white w-2/5 h-auto my-10 mx-10 rounded-b-3xl overflow-hidden hover:bg-blue-100'>
      <div className="outline outline-blue-100 h-16 bg-gray">
        <h1 className='font-serif text-lg px-4'>{date}</h1>
        <h1 className='font-serif font-bold text-2xl text-gray-700 px-2 text-wrap truncate'>{title}</h1>
      </div>
      <div >
        <p className=' font-serif py-3 px-4  text-wrap text-ellipsis'>
          {content}
        </p>
      </div>
     

    </div>
  );
}

export default PostCard;
