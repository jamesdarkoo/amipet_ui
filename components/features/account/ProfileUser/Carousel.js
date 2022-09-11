import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
// import '~slick-carousel/slick/slick.css';
import { images } from './Images';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowLeft,
  faArrowRight,
  faPlus,
  faPaw,
} from '@fortawesome/free-solid-svg-icons';

const useStyles = makeStyles((theme) => ({
  root: {
    'width': '14em',
    'height': 220,
    'margin': theme.spacing(1),
    '&:hover': {
      boxShadow: '0px 1px 7px -2px rgba(20,23,26,1)',
    },
    [theme.breakpoints.down('sm')]: {
      height: 208,
    },
  },
  carousel: {
    'marginBottom': theme.spacing(2.5),
    '& .slick-slider': {
      display: 'flex',
      alignItems: 'center',
    },
  },
  titlePets: {
    'color': theme.palette.secondary.dark,
    'fontWeight': '500',
    'textAlign': 'center',
    'margin': 'initial',
    'textTransform': 'capitalize',
    'marginBottom': theme.spacing(2.5),
    '& svg': {
      color: theme.palette.primary.main,
    },
  },
  small: {
    width: theme.spacing(14),
    height: theme.spacing(14),
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
  },
  ProfileCardCenter: {
    justifyContent: 'center',
    display: 'flex',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  ProfileCardActions: {
    'flexDirection': 'column',
    'marginTop': theme.spacing(1),
    'padding': 'initial',
    'width': '100%',
    '& .MuiButtonBase-root': {
      padding: 'initial',
      margin: 'initial',
      marginTop: '8px',
      width: 128,
      [theme.breakpoints.down('sm')]: {
        '& .MuiButtonBase-root': {
          width: 100,
        },
      },
      [theme.breakpoints.down('xs')]: {
        width: 90,
      },
    },
  },
  btnCard: {
    'backgroundColor': (props) =>
      props.backgroundColor === 'green'
        ? `${theme.palette.primary.main}`
        : `${theme.palette.secondary.main}`,
    'color': theme.palette.secondary.light,
    'textTransform': 'none',
    '&:hover': {
      backgroundColor: (props) =>
        props.backgroundColor === 'green'
          ? `${theme.palette.primary.main}`
          : `${theme.palette.secondary.main}`,
    },
  },
  addPets: {
    'width': theme.spacing(8),
    'height': theme.spacing(8),
    'display': 'flex',
    'justifyContent': 'center',
    'alignItems': 'center',
    'border': `2px solid ${theme.palette.primary.main}`,
    'borderRadius': '50%',
    'borderStyle': 'dotted',
    'cursor': 'pointer',
    [theme.breakpoints.down('sm')]: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    '& svg': {
      color: theme.palette.primary.main,
      fontSize: 33,
    },
  },
  btnAddPets: {
    'width': '150px !important',
    'padding': 'initial',
    'margin': 'initial',
    'marginTop': '20px !important',
    '& .MuiButton-label': {
      textTransform: 'capitalize',
      color: theme.palette.secondary.dark,
      fontWeight: '500 !important',
    },
  },
  profileCardItem: {
    'display': 'flex !important',
    'justifyContent': 'center',
    '&:focus': {
      outline: 0,
    },
  },
  arrow: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    'textDecoration': 'none',
    'display': 'flex',
    'width': '100%',
    '&:focus': {
      outline: 0,
    },
  },
}));
export default function CarouselItems() {
  const classes = useStyles();

  function BtnCard(props) {
    const { backgroundColor, ...other } = props;
    const classes = useStyles(props);
    return (
      <Button className={classes.btnCard} {...other}>
        {props.name}
      </Button>
    );
  }

  const items = images.map((list) => {
    return (
      <div className={classes.profileCardItem} key={list}>
        <Card className={classes.root}>
          <CardContent className={classes.ProfileCardCenter}>
            <div>
              <Avatar
                alt="Remy Sharp"
                src={list.url}
                className={classes.small}
              />
            </div>
            <CardActions className={classes.ProfileCardActions}>
              <BtnCard name="ver perfil" backgroundColor="green" />
              <BtnCard name="Veterinario" />
            </CardActions>
          </CardContent>
        </Card>
      </div>
    );
  });
  const settings = {
    infinite: false,
    slidesToShow: 4,
    touchMove: false,
    slidesToScroll: 1,
    speed: 750,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 720,
        settings: {
          speed: 400,
          touchMove: true,
          slidesToShow: 3.1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          speed: 400,
          touchMove: true,
          slidesToShow: 2.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon
        className={classes.arrow}
        icon={faArrowRight}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <FontAwesomeIcon
        className={classes.arrow}
        icon={faArrowLeft}
        onClick={onClick}
      />
    );
  }
  return (
    <div className={classes.carousel}>
      <h2 className={classes.titlePets}>
        mis mascotas <FontAwesomeIcon icon={faPaw} />
      </h2>
      <Slider {...settings}>
        <Link href="/add-pet" className={classes.link}>
          <a>
            <div className={classes.profileCardItem}>
              <Card className={classes.root}>
                <CardContent className={classes.ProfileCardCenter}>
                  <div className={classes.addPets}>
                    <FontAwesomeIcon icon={faPlus} />
                  </div>
                  <CardActions className={classes.ProfileCardActions}>
                    <Button className={classes.btnAddPets}>
                      agregar mascostas
                    </Button>
                  </CardActions>
                </CardContent>
              </Card>
            </div>
          </a>
        </Link>
        {items}
      </Slider>
    </div>
  );
}
