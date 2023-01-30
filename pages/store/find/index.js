import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core';
import { faker } from "@faker-js/faker";
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import CardPet from '../../../components/layout/cards/cardPet';
import DividerLine from '../../../components/layout/dividerLine';

const categories = [
  'perro',
  'gato',
  'macho',
  'hembra',
  'toys',
  'pequeño',
  'mediano',
  'grande',
  'gigante',
];
const gender = ['macho', 'hembra'];
const getRandom = (max, min) => Math.floor(Math.random() * (max - min)) + min;
const pets = new Array(12).fill(1).map((_, i) => ({
  id: new Date().getTime() + i,
  image: faker.image.animals(),
  name: faker.name.lastName(),
  category: categories[getRandom(categories.length, 0)],
  gender: gender[getRandom(gender.length, 0)],
}));

const Find = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <DividerLine
            title="Mascotas en adopción"
            icon={faPaw}
            styles={style}
          />
          <br />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.root}>
            {pets.map((e) => (
              <CardPet
                key={e.id}
                data={e}
                name={e.name}
                image={e.image}
                view={false}
                id={e.id}
                gender={e.gender}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const style = {
  root: (theme) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  }),
  divider: (theme) => ({
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      width: 300,
    },
  }),
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gridGap: '1em',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    ...(typeof root === 'function' ? root(theme) : root),
  }),
}));

export default Find;
