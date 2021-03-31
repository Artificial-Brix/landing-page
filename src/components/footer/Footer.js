import { Container, Grid } from "@material-ui/core";
import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="footerSection" maxWidth="lg">
        <Grid container>
          <Grid item lg={2} md={3} sm={6} xs={12}>
            <ul>
              <h3>dihan abir</h3>
              <li>dihan abir</li>
              <li>dihan abir</li>
              <li>dihan abir</li>
            </ul>
          </Grid>
          <Grid item lg={5} md={3} sm={6} xs={12}>
            <ul>
              <h3>nahid abir</h3>
              <li>dihan abir</li>
              <li>nahid abir</li>
              <li>dihan abir</li>
            </ul>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <ul>
              <h3>dihan abir</h3>
              <li>dihan abir</li>
              <li>dihan abir</li>
              <li>dihan abir</li>
            </ul>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            item
            lg={2}
            md={3}
            sm={6}
            xs={12}
          >
            <ul>
              <li>dihan abir</li>
              <li>dihan abir</li>
              <li>dihan abir</li>
              <li>dihan abir</li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
