import React from 'react';
import './NavBar.css'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';


const NavBar = () => {
  const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
  }));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
  <Menu
  anchorEl={mobileMoreAnchorEl}
  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
  id={mobileMenuId}
  keepMounted
  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
  open={isMobileMenuOpen}
  onClose={handleMobileMenuClose}
>
  <MenuItem>
    <a className="nav_item" href="#services">Services</a>
  </MenuItem>
  <MenuItem>
    <a className="nav_item" href="#about">About</a>
  </MenuItem>
  <MenuItem>
    <a className="nav_item" href="#products">Products</a>
  </MenuItem>
  <MenuItem>
    <a className="nav_item" href="#careers">Careers</a>
  </MenuItem>
</Menu>
);
  return (
    <div className="navbar">
      <img 
      src="https://images-eu.ssl-images-amazon.com/images/I/61T6sk68RhL.png" 
      alt="logo"
      />
      <Toolbar> 
        <div className='nav' />
          <div className={classes.sectionDesktop}>
            <ul className="navbar_ul">
              <li className="navbar_li">
                <a href="#services">Services</a>
              </li>
              <li className="navbar_li">
                <a href="#about">About</a>
              </li>
              <li className="navbar_li">
                <a href="#products">Products</a>
              </li>
              <li className="navbar_li">
                <a href="#careers">Careers</a>
              </li>
            </ul>
          </div>
        <div className={classes.sectionMobile}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon style={{color:'#fff'}}/>
          </IconButton>
        </div>
      </Toolbar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NavBar;
