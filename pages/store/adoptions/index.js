import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  Container,
  Button,
  IconButton,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaw, faPlus } from '@fortawesome/free-solid-svg-icons';
import {
  faEdit,
  faEye,
  faEyeSlash,
  faTrashAlt,
} from '@fortawesome/free-regular-svg-icons';
import { faker } from "@faker-js/faker";

import DividerLine from '@/components/layout/dividerLine';
import Dotted from '@/components/layout/buttons/dotted';
import Search from '@/components/fields/search';
import ModalDelete from '@/components/modals/modalDelete';
import CardPet from '@/components/layout/cards/cardPet';

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
  // image: faker.image.animals(),
  image:'http://placekitten.com/640/480',
  name: faker.name.lastName(),
  category: categories[getRandom(categories.length, 0)],
  gender: gender[getRandom(gender.length, 0)],
}));

const Adoptions = () => {
  const classes = useStyles();
  const [view, setView] = React.useState(false);
  const [selectID, setSelectID] = React.useState(null);
  const [petsList, setPetlist] = React.useState(pets);
  const [open, setOpen] = React.useState(false);
  const [categoryFilter, setCategoryFilter] = React.useState();
  const [updated, setUpdated] = React.useState(false);
  const [ids, setIds] = React.useState([]);

  const handleClickEye = (id) => {
    const newArray = ids.includes(id)
      ? ids.filter((e) => e !== id)
      : ids.concat(id);
    setIds([...newArray]);
  };

  const handleDelete = ({ id: petID }) => {
    const newData = [...pets.map((e) => ({ ...e }))].filter(
      ({ id }) => id !== petID
    );
    setPetlist(newData);
  };

  const handleSearch = (event) => {
    const value = (event.target || {}).value || '';
    setCategoryFilter();
    if (value && value.length > 2) {
      const pet = petsList.filter((n) =>
        n.name.toLowerCase().includes(value.toLowerCase())
      );
      setPetlist(pet);
      setUpdated(true);
      return;
    }
    if (updated) {
      setUpdated(false);
      setPetlist(pets);
    }
  };

  const handleSelect = (filter) => {
    if (filter === categoryFilter) {
      setPetlist(pets);
      setCategoryFilter();
      setUpdated(false);
    } else {
      const newPets = pets.filter(
        ({ category, gender }) => category === filter || gender === filter
      );
      setPetlist(newPets);
      setCategoryFilter(filter);
      setUpdated(true);
    }
  };

  const handleOpenModal = (id) => {
    setOpen(true);
    setSelectID(id);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectID(null);
  };

  const renderIcon = (id) => {
    if (!ids.includes(id)) {
      return <FontAwesomeIcon icon={faEye} />;
    }
    return <FontAwesomeIcon icon={faEyeSlash} />;
  };

  return (
    <Container>
      <Grid container>
        <Grid item xs={12}>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => setView(!view)}
          >
            Change view
          </Button>
        </Grid>
        <Grid item xs={12}>
          <div style={{ position: 'relative', margin: '10px 0' }}>
            <DividerLine
              title={view ? 'Mis Mascotas en adopción' : 'Mascotas en adopción'}
              icon={!view ? faPaw : ''}
              styles={style}
            />
            {view ? (
              <Dotted
                description="Agregar mascotas"
                icon={<FontAwesomeIcon icon={faPlus} />}
                styles={stylesButtonFloat}
              />
            ) : (
              ''
            )}
          </div>
        </Grid>
        <br />
        {view ? (
          <Grid item xs={12}>
            <Search
              placeholder="Buscar"
              handleSearch={handleSearch}
              style={search}
            />
            <br />
          </Grid>
        ) : (
          ''
        )}
        <br />
        <br />
        <Grid item xs={12}>
          <Grid container justifyContent='center'>
            <Grid item xs={12}>
              <Typography
                component="h3"
                variant="h3"
                style={{ textAlign: 'center' }}
              >
                Selecciona tus preferencias
              </Typography>
            </Grid>
            <Container
              component="div"
              maxWidth="lg"
              className={classes.container2}
            >
              <Grid item xs={12}>
                <Grid container spacing={2} justifyContent='center' wrap="nowrap">
                  {categories.map((e) => (
                    <Grid item key={e}>
                      <Button
                        variant="outlined"
                        onClick={() => handleSelect(e)}
                        size="large"
                        className={
                          categoryFilter && categoryFilter === e
                            ? classes.btnActive
                            : classes.btnDisable
                        }
                      >
                        {e}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Container>
          </Grid>
          <br />
        </Grid>
        <Grid item xs={12}>
          <div className={petsList.length && classes.root}>
            {petsList.length ? (
              petsList.map((e) => (
                <div key={e.id}>
                  <CardPet
                    name={e.name}
                    image={e.image}
                    gender={e.gender}
                    style={card}
                  >
                    {view ? (
                      <div>
                        <IconButton
                          className={classes.iconButton}
                          onClick={() => handleClickEye(e.id)}
                        >
                          {renderIcon(e.id)}
                        </IconButton>
                        <IconButton className={classes.iconButton}>
                          <FontAwesomeIcon icon={faEdit} />
                        </IconButton>
                        <IconButton
                          className={classes.iconButton}
                          onClick={() => handleOpenModal(e.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </IconButton>
                      </div>
                    ) : (
                      <></>
                    )}
                  </CardPet>
                  {view && (
                    <ModalDelete
                      selectID={selectID}
                      handleOpenModal={open}
                      handleCloseModal={handleCloseModal}
                      deleteItem={() => handleDelete(e)}
                      id={e.id}
                      name={e.name}
                    />
                  )}
                </div>
              ))
            ) : (
              <h2>No hay resultados...</h2>
            )}
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

const card = {
  root: (theme) => ({
    maxWidth: 230,
    [theme.breakpoints.down('md')]: {
      maxWidth: 210,
    },
  }),
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

const search = {
  root: (theme) => ({
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  }),
};

const stylesButtonFloat = {
  root: (theme) => ({
    width: '20%',
    position: 'absolute',
    right: 70,
    top: -8,
    '&:hover': {
      borderStyle: 'solid',
      color: theme.palette.secondary.light,
      backgroundColor: 'rgb(5, 192, 137)',
    },
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      borderStyle: 'solid',
      right: 0,
      width: '60%',
      height: 50,
      margin: '10px auto',
      marginTop: 20,
      backgroundColor: 'rgb(5, 192, 137)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 50,
    },
    [theme.breakpoints.down('xs')]: {
      width: '80%',
    },
  }),
  container: {
    height: '100%',
  },
  description: (theme) => ({
    fontSize: theme.spacing(1.7),
    fontWeight: 500,
    [theme.breakpoints.down('sm')]: {
      color: 'white',
      fontSize: 14,
    },
    '& p': {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        fontSize: 20,
      },
    },
  }),
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    display: 'grid',
    gridGap: '1em',
    gridTemplateColumns: 'repeat(6, 1fr)',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(5, 1fr)',
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(4, 1fr)',
    },
    [theme.breakpoints.down(720)]: {
      gridTemplateColumns: 'repeat(3, 1fr)',
    },
    [theme.breakpoints.down(480)]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    ...(typeof root === 'function' ? root(theme) : root),
  }),
  container: {
    position: 'relative',
  },
  containerHeader: {
    height: '13em',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      alignItems: 'center',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'flex-start',
      height: '20em',
      position: 'relative',
    },
    '& > img': {
      width: '100%',
      height: '20em',
      position: 'absolute',
      top: -80,
      zIndex: -1,
      [theme.breakpoints.up('sm')]: {
        position: 'relative',
        width: '65%',
        top: 0,
      },
      [theme.breakpoints.up('md')]: {
        width: '53em',
        top: -200,
        left: -85,
        position: 'absolute',
        height: '42em',
      },
    },
    '& > h2': {
      position: 'absolute',
      bottom: -15,
      [theme.breakpoints.up('sm')]: {
        position: 'relative',
        bottom: 0,
        marginLeft: '14em',
        marginTop: -100,
        fontSize: 50,
        '& > span': {
          display: 'block',
          lineHeight: 1,
          fontSize: 50,
          [theme.breakpoints.down('sm')]: {
            display: 'inline',
            fontSize: 20,
          },
        },
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: 0,
        marginTop: 0,
        fontSize: 20,
      },
    },
  },
  btnActive: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    textTransform: 'capitalize',
    color: 'white',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnDisable: {
    color: theme.palette.secondary.dark,
    borderColor: theme.palette.primary.main,
    textTransform: 'capitalize',
  },
  container2: {
    marginTop: 10,
    '& .MuiGrid-root': {
      display: 'flex',
      justifyContent: 'center',
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'space-between',
      },
    },
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-container': {
        overflowX: 'auto',
      },
    },
  },
  iconButton: {
    fontSize: 15,
  },
}));

export default Adoptions;
