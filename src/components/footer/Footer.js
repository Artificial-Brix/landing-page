import { Container, Grid } from "@material-ui/core";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="footerSection" maxWidth="lg">
        <Grid justify="center" container>
          <Grid lg={3} md={3} sm={6} container justify="space-around">
            <ul>
              <h3>Quick Links</h3>
              <li>Services</li>
              <li>Products</li>
              <li>About</li>
            </ul>
          </Grid>
          <Grid
            lg={5}
            md={5}
            sm={6}
            container
            direction="row"
            alignContent="center"
            justify="space-around"
          >
            <ul>
              <h3></h3>
              <li>BLOGS</li>
              <li>CAREERS</li>
              <li>PRIVACY POLICY</li>
            </ul>
          </Grid>
          <Grid lg={3} md={3} sm={6} container justify="space-around">
            <ul>
              <h3>Contacts:</h3>
              <li>artificialbrix@gmail.com</li>
              <li>Name</li>
              <li>Phone No</li>
            </ul>
          </Grid>
          <Grid lg={1} md={1} sm={6} container justify="space-around">
            <ul>
              <li>
                <FacebookIcon></FacebookIcon>
              </li>
              <li>
                <InstagramIcon />
              </li>
              <li>
                <LinkedInIcon />
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
