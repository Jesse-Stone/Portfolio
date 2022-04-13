import React, { useState, useEffect } from 'react';
import { debounce } from '../../utilities/helpers'

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;

    setVisible(currentScrollPos < 60);

    setPrevScrollPos(currentScrollPos);
  }, 100);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);

  }, [prevScrollPos, visible, handleScroll]);

  const navbarStyles = {
    main: {
    position: 'fixed',
    height: '60px',
    width: '40%',
    // backgroundColor: 'grey',
    transition: 'top 0.6s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
    },

    item: {
      // backgroundColor: 'red',
      fontSize: '1rem',
      paddding: '5rem',
      fontWeight: '200',
    }
  }

  return (
    <div style={{ ...navbarStyles.main, top: visible ? '0' : '-60px' }}>
      <div style = {navbarStyles.item}>01. About Me</div> 
      <div style = {navbarStyles.item}>02. Career</div> 
      <div style = {navbarStyles.item}>03. Projects</div>
      <div style = {navbarStyles.item}>04. Contact Me</div> 
    </div>
  );
};

export default Navbar;