import React, { useState } from 'react';
import Link from 'next/link';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import useStyles from './ProfileHeader.styles';


export default function ProfileHeader({ user, isAuthenticated }) {
  const classes = useStyles();
  const [follow, setFollow] = useState('Seguir');
  const handleFollow = () => {
    if (follow === 'Seguir') {
      setFollow('Siguiendo');
    } else {
      setFollow('Seguir');
    }
  };

  return (
    <>
      <Avatar alt="avatar" src={user.avatarUrl} className={classes.small} />
      <div className={classes.info}>
        <div className={classes.HeaderName}>
          <h3 className={classes.HeaderNameUser}>{user.firstName} {user.lastName}</h3>
          {
            isAuthenticated &&
              <Link href="/edit-profile">
                <Button variant="outlined" size="small">
                  Editar perfil
                </Button>
              </Link>
          }
          <Button variant="outlined" size="small" className={`${classes.Btns}`} onClick={handleFollow}>
            {follow}
          </Button>
        </div>
        <div>
          <ul className={classes.Ul}>
            <li>
              <span>
                <span>4</span>
                Mascotas
              </span>
            </li>
            <Divider orientation="vertical" flexItem />
            <li>
              <span>
                <span>4</span>
                Amigos
              </span>
            </li>
            <Divider orientation="vertical" flexItem />
            <li>
              <span>
                <span>4</span>
                Seguidores
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.description}>
          <p>
            {user.biography}
          </p>
        </div>
      </div>
    </>
  );
}
