import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SocialNetWork = (props) => {
  const handleClose = (name) => () => {
    if (props.handleClick) {
      props.handleClick(name);
    }
  };
  return (
    <Menu
      id="social-menu-media"
      anchorEl={props.anchorEl}
      keepMounted
      open={Boolean(props.anchorEl)}
      onClose={handleClose()}
    >
      <MenuItem onClick={handleClose('facebook')}>Facebook</MenuItem>
      <MenuItem onClick={handleClose('facebookMessenger')}>
        Facebook Messenger
      </MenuItem>
      <MenuItem onClick={handleClose('twitter')}>Twitter</MenuItem>
      <MenuItem onClick={handleClose('whatsapp')}>WhatsApp</MenuItem>
      <MenuItem onClick={handleClose('email')}>Email</MenuItem>
      <MenuItem onClick={handleClose('instagram')}>Instagram</MenuItem>
    </Menu>
  );
};

SocialNetWork.prototype = {
  anchorEl: PropTypes.any,
};

export default SocialNetWork;
