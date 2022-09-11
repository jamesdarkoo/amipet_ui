import React from 'react';
import { Container } from '@material-ui/core';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Container disableGutters maxWidth="xl">
      <Navbar />
      {children}
    </Container>
  );
};

export default Layout;
