import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import ChevronRightRounded from "@material-ui/icons/ChevronRightRounded";
import { Divider, makeStyles } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";
import "./ServiceCard.css";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "center",
    spacing: 10
  },
  list: {
    padding: "20px"
  },
  button: {
    margin: theme.spacing(1)
  },
  action: {
    display: "flex",
    justifyContent: "space-around"
  }
}));

export const ServiceCard = React.memo(function PricingCard({
  service,
  description
}) {
  const classes = useStyles();
  return (
    <Card className="serviceCard">
      {/* <CardHeader title="Basic Plan" className={classes.header} /> */}
      {/* <Divider variant="middle" /> */}
      <CardContent>
        <Typography variant="h4" align="center" className="test">
          {service}
        </Typography>
        <div className="serviceDescription">
          <Typography align="center" className="serviceDescription__paragraph">
            {description}
          </Typography>
          {/* <Typography align="center">Sync notes</Typography>
          <Typography align="center">Set deadline</Typography> */}
        </div>
      </CardContent>
      {/* <Divider variant="middle" /> */}
      <CardActions className={classes.action}>
        <Link className="serviceCard__button ">Find Out More</Link>
      </CardActions>
    </Card>
  );
});

export default ServiceCard;
