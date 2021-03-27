import { Avatar, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import reviewData from "../review/ReviewData";

const useStyles = makeStyles({
	review: {
		background: "#111011",
		minHeight: "100vh",
		padding: "100px 0 100px 0",
		color: "#ffffff",
		textAlign: "center",
	},
	typo: {
		fontWeight: "bold",
	},
	feedback: {
		margin: "50px 20px 50px 20px",
		padding: "60px 50px 50px 50px ",
		borderRadius: "10px",
		background: "#fff",
		color: "#000",
		minHeight: "230px",
		boxShadow: "0px 20px 30px -10px #abababb3",
		"&:hover": {
			boxShadow: "none",
			transition: ".3s ease",
		},
	},
	feedbackStyle: {
		"&::after": {
			content: "''",
			position: "absolute",
			width: "45px",
			height: "45px",
			background: "#fff",
			transform: "rotate(45deg)",
			margin: "-76px 0 0 -22px",
			borderRadius: "3px",
		},
	},
	occupation: {
		color: "#9da821",
	},
	avatar: {
		height: "50px",
		width: "50px",
		marginBottom: "5px",
	},
	avatarIcon: {
		width: "60px",
		height: "60px",
		color: "white",
		background: "black",
	},
});

const Review = () => {
	const classes = useStyles();

	return (
		<section className={classes.review}>
			<Container>
				<Grid container justify="center">
					<Typography variant="h3" className={classes.typo}>
						Reviews of Our Customers
					</Typography>
					<Typography variant="h6" component="p" className={classes.typo}>
						We help you to grow your business/ freelancing with our solution team. <br /> Here is, what some of our
						customers saying about us.
					</Typography>
				</Grid>
				<Grid container justify="space-around">
					{reviewData.map((review) => (
						<Grid lg={4} md={4} sm={6} container justify="space-around">
							<div className={classes.feedbackStyle}>
								<Grid className={classes.feedback}>
									<Typography variant="h5" component="h3" className={classes.typo}>
										{review.title}
									</Typography>
									<Typography variant="subtitle1" className={classes.typo}>
										{review.comment}
									</Typography>
								</Grid>
							</div>
							<Grid>
								<Grid container justify="center">
									<Avatar className={classes.avatar}>
										<AccountCircle className={classes.avatarIcon} />
									</Avatar>
								</Grid>
								<Typography variant="h5" className={classes.typo}>
									{review.name}
								</Typography>
								<Typography className={classes.occupation}>{review.occupation}</Typography>
							</Grid>
						</Grid>
					))}
				</Grid>
			</Container>
		</section>
	);
};

export default Review;
