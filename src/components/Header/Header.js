
import React from "react";
import './Header.css';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Badge from '@material-ui/core/Badge';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hamburgers from './hamburgers/Hamburgers.js';
import { Link } from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexgrow: 1,
  },
  barBox: {
    [theme.breakpoints.down(832)]: {
      display: 'none',
    },
  },
  menu:{
    [theme.breakpoints.up(832)]: {
      display: 'none',
    },
  },

  active:{
    marginLeft: theme.spacing(6),
    color: '#334ac0',
    boxShadow: '0 2px 0 #334ac0',
  },
  inactive:{
    marginLeft: theme.spacing(6),
    '&:hover': {
    boxShadow: '0 2px 0 #dddfe5',
    },
  },
  title: {
    flexGrow: 1,
  },
}));


function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [burgerState, setBurgerState] = React.useState(false);
  const [activeButton, setActiveButton] = React.useState('About');
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    setBurgerState(!burgerState);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setBurgerState(!burgerState);
  };

  const handleButtonState = (name) => {
    if (name === 'Home') {
      setActiveButton('Home');
    }
    else if (name === 'About') {
      setActiveButton('About');
    }
    else if (name === 'Blog') {
      setActiveButton('Blog');
    }
    else if (name === 'Job') {
      setActiveButton('About');
    } else {
      setActiveButton(null);
    }
  };


  return (
    <AppBar position="sticky" color="transparent">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems='center'
          >
          <svg fill="none" height="23" width="66"><path d="M44.87 17.272a4.318 4.318 0 11.04-4.877l3.191-1.884a8.019 8.019 0 10-.017 8.613l-3.213-1.852zM53.662 0H49.96v22.206h3.7v-7.402a4.318 4.318 0 118.636 0v7.402h3.701v-8.122a7.3 7.3 0 00-12.336-5.282V0zM27.756 0h-3.701v17.271a5.551 5.551 0 009.201 4.183l-1.788-3.034a1.847 1.847 0 01-1.45.701h-.412a1.851 1.851 0 01-1.85-1.85v-6.168h3.7V7.402h-3.7V0zM19.74 0a2.056 2.056 0 100 4.112 2.056 2.056 0 000-4.112zM21.59 22.206V7.402h-3.7v14.804h3.7z" fill="currentColor"></path><path clipRule="evenodd" d="M0 22.206h3.7v-4.318h3.393A8.944 8.944 0 107.093 0H0v22.206zM3.7 3.7h3.393a5.243 5.243 0 010 10.486H3.701V3.7z" fillRule="evenodd" fill="currentColor"></path></svg>

          <Box display="flex" className={classes.barBox}>
            <Typography variant="h6" className={activeButton === 'Home' ? classes.active : classes.inactive} onClick={() => handleButtonState('Home')}>
              <Link to="/">
                Home
              </Link>
            </Typography>
            <Typography variant="h6" className={activeButton === 'About' ? classes.active : classes.inactive} onClick={() => handleButtonState('About')}>
              <Link to="/about">
                About
              </Link>
            </Typography>
            <Typography variant="h6" className={activeButton === 'Blog' ? classes.active : classes.inactive} onClick={() => handleButtonState('Blog')}>
              <Link to="/blog">
                Blog
              </Link>
            </Typography>
            <Box>
              <Badge badgeContent={8} color="primary" >
                <Typography variant="h6" className={classes.inactive} onClick={() => handleButtonState('Job')}>
                  <Link to="/about">
                    Job
                  </Link>
                </Typography>
              </Badge>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
            >
              Get early access
            </Button>

            {/* small viewpoint menu */}
            <div className='burger-button'>
              <Hamburgers function={handleClick} buttonState={burgerState} className={classes.menu}/>
            </div>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Typography variant="h6" onClick={() => handleButtonState('Home')}>
                  <Link to="/">
                    Home
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="h6" onClick={() => handleButtonState('About')}>
                  <Link to="/about">
                    About
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="h6" onClick={() => handleButtonState('Blog')}>
                  <Link to="/blog">
                    Blog
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Typography variant="h6" onClick={() => handleButtonState('Job')}>
                  Job
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

        </Grid>
      </Toolbar>
    </AppBar>
);
}

export default Header;
