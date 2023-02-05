import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, Paper, Hidden, Button } from '@material-ui/core';
import { SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faker } from "@faker-js/faker";
import Image from 'next/image';

// import logo from '@/images/imageProm.png';
import logo from '../../assets/images/imageProm.png';
import ProfileCover from  '@/components/layout/profilecover';
import Carousel from '@/components/layout/carousel/carousel';
import CardFoundationPet from '@/components/layout/cards/cardFoundationPet';
import CardPet from '@/components/layout/cards/cardPet';
import ExpandBio from '@/components/Shared/accordioninfo';
import DividerLine from '@/components/layout/dividerLine';
import Gallery from '@/components/Shared/gallery';
import Opinion from  '@/components/layout/cards/opinion';

const getRandom = (max, min) => Math.round(Math.random() * (max - min) + min);
const names = [
  'Fundacion animal',
  'Fundacion animal',
  'Patitas',
  'Amipet',
  'Animales al rescate',
];
const gender = ['macho', 'hembra'];
const data = new Array(1).fill(1).map((_, i) => ({
  id: new Date().getTime() + i,
  cover: faker.image.image(),
  name: names[getRandom(names.length, 1)],
  distance: getRandom(100, 1),
  rating: getRandom(5, 1),
  // image: faker.image.animals(),
  image:'http://placekitten.com/640/480',
  images: new Array(8).fill(1).map((_, i) => 'https://picsum.photos/640/480'),
  // images: new Array(8).fill(1).map((_, i) => faker.image.image()),
  opinions: new Array(8).fill(1).map((_, i) => ({
    id: new Date().getTime() + i,
    avatar: faker.image.avatar(),
    feedback: getRandom(1, 5),
    description: faker.lorem.paragraph(),
  })),
}));

const images = new Array(6).fill(1).map((_, i) => ({
  id: new Date().getTime() + i,
  image: 'http://placekitten.com/640/480',
  // image: faker.image.animals(),
}));

const pets = new Array(8).fill(1).map((_, i) => ({
  id: new Date().getTime() + i,
  // image: faker.image.animals(),
  image:'http://placekitten.com/640/480',
  name: faker.name.lastName(),
  gender: gender[getRandom(gender.length, 0)],
}));

const Foundation = () => {
  const classes = useStyles();
  const { isMobile } = React.useState(1300);
  const { name, image, distance, rating } = data[0];
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [favorite, setFavorite] = React.useState(false);
  const [expand, setExpand] = React.useState(false);

  const handleMenuClose = () => setAnchorEl(null);

  const onChange = () => setFavorite(!favorite);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // console.log('images', images);
  // console.log('pets', pets);
  return (
    <>
      <Grid container>
        <Grid item xs={12}>
          <Carousel length={images.length}>
            {images.map((e, i) => (
              <SwiperSlide key={e.id}>
                <CardFoundationPet backgroundUrl={e.image} />
              </SwiperSlide>
            ))}
          </Carousel>
        </Grid>
        <Grid item xs={12}>
          <Container maxWidth={isMobile <= 1300 ? 'lg' : 'xl'}>
            <ProfileCover
              nameProfile="Fundación"
              imageProfile={image}
              name={name}
              rating={rating}
              distance={distance}
              anchorEl={anchorEl}
              handleProfileMenuOpen={handleProfileMenuOpen}
              handleMenuClose={handleMenuClose}
              favorite={favorite}
              onChange={onChange}
              isMobile={isMobile}
              style={style}
            />
          </Container>
        </Grid>
      </Grid>
      <Container maxWidth={isMobile <= 1300 ? 'lg' : 'xl'}>
        <Grid container spacing={2}>
          <Grid item xs={12} />
          <Grid item xs={12}>
            <ExpandBio
              styles={accordion}
              biography={faker.lorem.paragraph()}
              expand={expand}
              setExpand={setExpand}
            />
          </Grid>
          <Grid item xs={12} />
          <Hidden smDown>
            <Grid item xs={4}>
              <Paper style={{ width: '100%', height: '100%' }}>
                {/* <figure style={{ width: '100%', height: '100%', margin: 0 }}>
                   <img
                    src={logo}
                    alt="logo foundacion"
                    style={{ width: '100%', height: '100%' }}
                  /> 
                </figure> */}
                <Image  alt="logo foundacion" src={logo} width={200} height={100}></Image>
              </Paper>
            </Grid>
          </Hidden>
          <Grid item sm={12} md={8} className={classes.root}>
            <Grid
              container
              spacing={isMobile >= 700 ? 3 : 2}
              wrap={isMobile <= 600 ? 'nowrap' : 'wrap'}
            >
              {pets.map((e) => (
                <Grid item md={3} key={e.id}>
                  <CardPet
                    style={styleCard}
                    name={e.name}
                    image={e.image}
                    id={e.id}
                    data={e}
                    gender={e.gender}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
          <Grid item xs={12} />
          <Grid container justifyContent='center'>
            <Grid item>
              <Button
                className={classes.btn}
                variant="outlined"
                endIcon={<FontAwesomeIcon icon={faPaw} />}
              >
                Ver todos
              </Button>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <DividerLine title="Galeriax" styles={accordion} />
          </Grid>
          <Grid item xs={12}>
            <Gallery 
              images={data[0].images.map((src) => ({ name: 'ami pet', src }))}
              desktop={{ height: 220, columns: 5 }}
              mobile={{ height: isMobile <= 600 ? 110 : 150, columns: 3 }}
              active={false}
            />
          </Grid>
          <Grid item xs={12}>
            <DividerLine title="Opiniones" styles={accordion} />
          </Grid>
          <Grid item xs={12} className={classes.root}>
            <Grid
              container
              spacing={2}
              wrap={isMobile <= 600 ? 'nowrap' : 'wrap'}
            >
              {data[0].opinions.map((e) => (
                <Grid item xs={12} sm={6} md={3} key={e.id}>
                  <Opinion
                    avatar={e.avatar}
                    rating={e.feedback}
                    description={e.description}
                    isMobile={isMobile}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

const styleCard = {
  root: (theme) => ({
    [theme.breakpoints.down('xs')]: {
      maxHeight: 180,
      width: '11em',
    },
  }),
};

const style = {
  icon: (theme) => ({
    '& svg': {
      color: theme.palette.secondary.dark,
    },
  }),
  referencesIconDistance: (theme) => ({
    '& svg': {
      color: theme.palette.secondary.dark,
    },
  }),
  rating: (theme) => ({
    '& .MuiRating-root': {
      color: theme.palette.secondary.dark,
    },
  }),
};

const accordion = {
  root: (theme) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }),
  divider: (theme) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }),
};

const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      overflowX: 'auto',
      overflowY: 'hidden',
    },
  },
  btn: {
    width: 200,
    textTransform: 'none',
    color: theme.palette.secondary.dark,
    '& svg': {
      color: theme.palette.secondary.yellow,
    },
  },
}));

export default Foundation;
