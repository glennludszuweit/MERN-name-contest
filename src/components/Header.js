import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ message }) => {
  return (
    <div className='Header text-center m-5'>
      <h2>{message}</h2>
    </div>
  );
};

Header.propTypes = {
  message: PropTypes.string,
};

export default Header;
