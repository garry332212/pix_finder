import React from 'react';
import styled from 'styled-components';

const DrawerContainer = styled.div`
  position: fixed;
  top: 0;
  right: 50%;
  width: 50vw;
  height: 100%;
  background-color: #fa5b5b;
  transform: translateX(100%);
  transition: transform 0.3s ease-in-out;

`;

const Drawer = () => {
  return (
    <DrawerContainer>
      <p>Home</p>
      <p>Log In</p>
      {/* Add more menu options here */}
    </DrawerContainer>
  );
};

export default Drawer;
