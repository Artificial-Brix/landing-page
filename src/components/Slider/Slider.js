import React, { useState } from 'react';
import './Slider.css';
import { 
  makeStyles,
  Slide, 
} from '@material-ui/core';
import { AccountCircle, EmailRounded, EmailSharp, Facebook, Instagram, LinkedIn } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    position: 'absolute',
    left: '3rem',
    top: '0rem',
    width: 380,
    backgroundColor: '#ddd',
    zIndex: '100',
  },  
}));

const Slider = () => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };
  return (
    <div className="slider">
      <div className="user_icon">
        <svg  
        onClick={handleChange} 
        width="35" 
        height="27" 
        className="svg_user_icon" 
        viewBox="0 0 35 27" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.125 13.125C14.8655 13.125 16.5347 12.4336 17.7654 11.2029C18.9961 9.97218 19.6875 8.30298 19.6875 6.5625C19.6875 4.82202 18.9961 3.15282 17.7654 1.92211C16.5347 0.691404 14.8655 0 13.125 0C11.3845 0 9.71532 0.691404 8.48461 1.92211C7.2539 3.15282 6.5625 4.82202 6.5625 6.5625C6.5625 8.30298 7.2539 9.97218 8.48461 11.2029C9.71532 12.4336 11.3845 13.125 13.125 13.125ZM2.1875 26.25C2.1875 26.25 0 26.25 0 24.0625C0 21.875 2.1875 15.3125 13.125 15.3125C24.0625 15.3125 26.25 21.875 26.25 24.0625C26.25 26.25 24.0625 26.25 24.0625 26.25H2.1875ZM24.0625 3.28125C24.0625 2.99117 24.1777 2.71297 24.3829 2.50785C24.588 2.30273 24.8662 2.1875 25.1562 2.1875H33.9062C34.1963 2.1875 34.4745 2.30273 34.6796 2.50785C34.8848 2.71297 35 2.99117 35 3.28125C35 3.57133 34.8848 3.84953 34.6796 4.05465C34.4745 4.25977 34.1963 4.375 33.9062 4.375H25.1562C24.8662 4.375 24.588 4.25977 24.3829 4.05465C24.1777 3.84953 24.0625 3.57133 24.0625 3.28125ZM25.1562 8.75C24.8662 8.75 24.588 8.86523 24.3829 9.07035C24.1777 9.27547 24.0625 9.55367 24.0625 9.84375C24.0625 10.1338 24.1777 10.412 24.3829 10.6171C24.588 10.8223 24.8662 10.9375 25.1562 10.9375H33.9062C34.1963 10.9375 34.4745 10.8223 34.6796 10.6171C34.8848 10.412 35 10.1338 35 9.84375C35 9.55367 34.8848 9.27547 34.6796 9.07035C34.4745 8.86523 34.1963 8.75 33.9062 8.75H25.1562ZM29.5312 15.3125C29.2412 15.3125 28.963 15.4277 28.7579 15.6329C28.5527 15.838 28.4375 16.1162 28.4375 16.4062C28.4375 16.6963 28.5527 16.9745 28.7579 17.1796C28.963 17.3848 29.2412 17.5 29.5312 17.5H33.9062C34.1963 17.5 34.4745 17.3848 34.6796 17.1796C34.8848 16.9745 35 16.6963 35 16.4062C35 16.1162 34.8848 15.838 34.6796 15.6329C34.4745 15.4277 34.1963 15.3125 33.9062 15.3125H29.5312ZM29.5312 21.875C29.2412 21.875 28.963 21.9902 28.7579 22.1954C28.5527 22.4005 28.4375 22.6787 28.4375 22.9688C28.4375 23.2588 28.5527 23.537 28.7579 23.7421C28.963 23.9473 29.2412 24.0625 29.5312 24.0625H33.9062C34.1963 24.0625 34.4745 23.9473 34.6796 23.7421C34.8848 23.537 35 23.2588 35 22.9688C35 22.6787 34.8848 22.4005 34.6796 22.1954C34.4745 21.9902 34.1963 21.875 33.9062 21.875H29.5312Z" fill="black"/>
        </svg>
      </div>
      <Slide in={checked} direction="right" mountOnEnter unmountOnExit>
        <div className={classes.root}>
          <div className='slider_container'>
            <img 
            src="https://images-eu.ssl-images-amazon.com/images/I/61T6sk68RhL.png" 
            alt="logo" 
            height="80"
            />
            <h2>Contact Our Solution Team</h2>
            <p>GET IN TOUCH</p>
            <div className="slider_contact">
              <EmailRounded /> 
              <div>artificialbrix@gmail.com</div>
            </div>
            <div className="slider_contact">
              <AccountCircle />
              <div>
                <p>SOUVIK</p>
                <p>9321023450</p>
                <p>CEO</p>
              </div>
            </div>
            <div className="slider_social_media">
              <Facebook className="icon" /> 
              <Instagram className="icon" /> 
              <EmailSharp className="icon" /> 
              <LinkedIn className="icon" /> 
            </div>
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slider;