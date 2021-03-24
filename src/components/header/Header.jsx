import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import handImg from "../../assets/hand.svg";

const useStyles = makeStyles({
	header: {
		background: "#111011",
	},
	headerRight: {
		padding: "15px",
		paddingBottom: "100px",
	},
	text: {
		color: "white",
	},
	btn: {
		background: "#e6e600",
		fontWeight: "bold",
		marginRight: "25px",
		padding: "10px 15px",
		borderRadius: "10px",
		"&:hover": {
			background: "#00ffff",
		},
	},
	typo: {
		marginTop: "25px",
		marginBottom: "70px",
	},
	img: {
		height: "100vh",
	},
	menu: {
		color: "#ffffff",
		fontWeight: "bold",
		padding: "5px 20px 5px 20px",
		marginTop: "20px",
	},
	btnGrp: {
		marginRight: "25px",
	},
});

const Header = () => {
	const classes = useStyles();

	return (
		<Grid container className={classes.header}>
			<Grid item md={6}>
				<img src={handImg} alt="" className={classes.img} />
			</Grid>
			<Grid item md={6} container>
				<Grid item container justify="flex-end" className={classes.btnGrp}>
					<Grid>
						<Button disableElevation className={classes.menu}>
							Services
						</Button>
					</Grid>
					<Grid>
						<Button disableElevation className={classes.menu}>
							Products
						</Button>
					</Grid>
					<Grid>
						<Button disableElevation className={classes.menu}>
							About
						</Button>
					</Grid>
					<Grid>
						<Button disableElevation className={classes.menu}>
							Careers
						</Button>
					</Grid>
				</Grid>
				<Grid item className={classes.headerRight} container direction="column" justify="center">
					<Typography variant="h5" component="h2" className={classes.text} gutterBottom>
						Touch the future with AB products.
					</Typography>
					<Typography className={classes.text}>
						Make your workspace visionary with AB solutions <br /> and services.
					</Typography>
					<Typography className={`${classes.text} ${classes.typo}`}>
						Execute your ideas with our solutions and execution team. <br /> Make a strong bond together &amp; make the
						future era a better place.
					</Typography>
					<Grid>
						<Button variant="contained" disableElevation className={classes.btn}>
							PRODUCTS DEMO
						</Button>
						<Button variant="contained" disableElevation className={classes.btn}>
							SEE BLOGS
						</Button>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

export default Header;
