import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardContent, Avatar } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { cropText } from '@/utils/index';

const Opinion = ({ avatar, description, rating, isMobile }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={classes.headerOption}>
          <Avatar className={classes.sizeAvatar} src={avatar} />
          <Rating
            value={rating}
            precision={0.5}
            emptyIcon={<StarBorderIcon fontSize="inherit" />}
            readOnly
          />
        </div>
        <Typography
          className={classes.typography}
          component="p"
          variant="body2"
        >
          {cropText(description, isMobile <= 600 ? 50 : 100)}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: theme.spacing(23),
    [theme.breakpoints.down('xs')]: {
      width: '18em',
      minHeight: theme.spacing(20),
    },
  },
  sizeAvatar: {
    width: theme.spacing(6),
    height: theme.spacing(6),
    marginRight: theme.spacing(2.5),
    [theme.breakpoints.down('xs')]: {
      marginRight: theme.spacing(2),
    },
  },
  opinionItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  headerOption: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiRating-root': {
      color: theme.palette.secondary.main,
    },
  },
  typography: {
    marginTop: theme.spacing(0.6),
  },
}));

export default Opinion;
