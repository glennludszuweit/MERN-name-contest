import React from 'react';

const ContestPreview = (contest) => {
  return (
    <div className='contest-preview'>
      <div className='category-name'>{contest.contestName}</div>
      <div className='contest-name'>{contest.categoryName}</div>
    </div>
  );
};

export default ContestPreview;
