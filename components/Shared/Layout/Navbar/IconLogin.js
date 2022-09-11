import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import {
  MailOutlineOutlined,
  NotificationsOutlined,
  AccountCircleOutlined,
} from '@material-ui/icons';
import { useRouter } from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    color: theme.palette.primary.dark,
    [theme.breakpoints.down('sm')]: {
      padding: 8,
    },
  },
  Badge: {
    '& .MuiBadge-badge': {
      backgroundColor: theme.palette.secondary.yellow,
    },
  },
  paper: {
    '& .MuiPaper-root': {
      backgroundColor: theme.palette.secondary.light,
      marginTop: 32,
      width: '16%',
      [theme.breakpoints.down('md')]: {
        width: 'auto',
      },
    },
  },
}));

export default function IconLogin() {
  const router = useRouter();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = (path) => {
    setAnchorEl(null);
    router.push(path);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      className={classes.paper}
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => handleMenuClose('/profile')}>
        Ver perfil
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose('/edit-profile')}>
        Editar perfil
      </MenuItem>
      <MenuItem onClick={() => handleMenuClose('/')}>Crear cuenta pro</MenuItem>
      <MenuItem onClick={() => handleMenuClose('/')}>Cerrar sesión</MenuItem>
    </Menu>
  );

  return (
    <>
      <IconButton aria-label="show 4 new mails" className={classes.root}>
        <Badge badgeContent={4} className={classes.Badge}>
          <NotificationsOutlined />
        </Badge>
      </IconButton>
      <IconButton aria-label="show 4 new mails" className={classes.root}>
        <Badge badgeContent={4} className={classes.Badge}>
          <MailOutlineOutlined />
        </Badge>
      </IconButton>
      <IconButton
        aria-label="show 4 new mails"
        className={classes.root}
        onClick={handleProfileMenuOpen}
      >
        <AccountCircleOutlined />
      </IconButton>
      {renderMenu}
    </>
  );
}
