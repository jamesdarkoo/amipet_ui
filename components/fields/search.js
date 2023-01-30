import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Paper,
  IconButton,
  InputBase,
  Button,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import SearchIcon from '@material-ui/icons/Search';

const SearchComponent = ({ handleSearch, placeholder, style }) => {
  const classes = useStyles(style);
  return (
    <>
      <Container component="div" maxWidth="md" className={classes.container}>
        <Paper component="form" className={classes.root} elevation={0}>
          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon />
          </IconButton>
          <InputBase
            className={classes.input}
            placeholder={placeholder}
            inputProps={{ 'aria-label': 'search google maps' }}
            onChange={handleSearch}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            disableElevation
            size="large"
          >
            Buscar
          </Button>
        </Paper>
      </Container>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: ({ root = {} }) => ({
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#f8f9fb',
    color: '#707070',
    [theme.breakpoints.down('sm')]: {
      width: '85%',
    },
    ...(typeof root === 'function' ? root(theme) : root),
  }),
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  iconButton: {
    padding: 10,
    color: '#52575d',
  },
  button: {
    color: 'white',
    borderRadius: 2,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
}));

SearchComponent.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default SearchComponent;
