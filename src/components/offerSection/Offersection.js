import { Container, Grid } from "@material-ui/core";
import "./offerSection.css";
import React from "react";

export default function Offersection() {
  const datas = [
    {
      name: "Content Writing",
      image: "https://i.ibb.co/hfQ4vVW/Content-Writing.jpg",
    },
    {
      name: "Digital Marketing",
      image: "https://i.ibb.co/bJRrMcx/Digital-Marketing.jpg",
    },
    {
      name: "ML and Analytics",
      image: "https://i.ibb.co/c34TNQB/ML-and-Analytics.jpg",
    },
    {
      name: "Our Own Products",
      image: "https://i.ibb.co/LzF3jcn/Our-Own-Products.jpg",
    },
    {
      name: "Training",
      image: "https://i.ibb.co/7QXLcqX/Training.jpg",
    },
    {
      name: "web solutions",
      image: "https://i.ibb.co/YXxdvjr/web-solutions.jpg",
    },
  ];

  return (
    <div
      style={{ backgroundColor: "#111011", padding: "6em 0px" }}
      className="text-center"
    >
      <Container maxWidth="md">
        <h2
          style={{
            paddingBottom: "20px",
            textTransform: "uppercase",
            fontSize: "32px",
            color: "#ffffff",
          }}
          color="textPrimary"
          align="center"
        >
          Our Offerings
        </h2>

        <Grid container spacing={3}>
          {datas.map((data) => (
            <Grid item lg={4} md={4} sm={6} xs={12}>
              {/* <Paper style={{ backgroundColor: "red" }}>{data.name}</Paper> */}
              <img
                style={{ width: "100%" }}
                src={data.image}
                alt={data.name}
              ></img>
              <button className="btn primaryButton">{data.name}</button>
            </Grid>
          ))}

          {/* <Grid item sm={4}>
          <Paper>xs=6 sm=3</Paper>
        </Grid>
        <Grid item sm={4}>
          <Paper>xs=6 sm=3</Paper>
        </Grid> */}
        </Grid>
      </Container>
    </div>
  );
}
