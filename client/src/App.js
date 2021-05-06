import React, { useEffect } from 'react';
import {
  AppBar,
  Button,
  Container,
  Grid,
  Grow,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

// og components
import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import project from './images/project.jpg';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxwidth='lg'>
      <AppBar
        className={classes.appBar}
        position='static'
        color='inherit'
        align='center'
      >
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h2' className={classes.title}>
            Projects
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
        <img
          src={project}
          className={classes.image}
          alt='projects are cool'
          height='60'
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify='space-between'
            alignItems='stretch'
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
