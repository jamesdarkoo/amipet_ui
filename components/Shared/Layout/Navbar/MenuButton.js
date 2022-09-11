import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Menu } from '@material-ui/icons';
import { Drawer, IconButton, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  btn: {
    [theme.breakpoints.down('sm')]: {
      padding: 8,
    },
  },
  list: {
    width: 250,
  },
}));

const MenuButton = () => {
  const classes = useStyles();

  const [isOpenMenu, setIsOpenMenu] = useState(false);

  return (
    <>
      <IconButton onClick={() => setIsOpenMenu(true)} className={classes.btn}>
        <Menu />
      </IconButton>
      <Drawer open={isOpenMenu} onClose={() => setIsOpenMenu(false)}>
        <div className={classes.list} role="presentation" onClick={() => setIsOpenMenu(false)}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default MenuButton;
