import React from "react";
import {
  withStyles,
  Card,
  CardContent,
  Typography,
  IconButton
} from "@material-ui/core";
import { DeleteOutlined, EditOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";
import Styles from "../style/Styles";

const ListCard = props => {
  const {
    classes,
    Id,
    Name,
    Occupation,
    Description,
    handleUpdate,
    removeData
  } = props;
  return (
    <Card className={classes.card} elevation={1}>
      <CardContent>
        <IconButton
          aria-label="Update"
          className={classes.edit}
          onClick={e => handleUpdate(e, Id)}
        >
          <EditOutlined />
        </IconButton>
        <IconButton
          aria-label="Delete"
          className={classes.delete}
          onClick={() => removeData(Id)}
        >
          <DeleteOutlined />
        </IconButton>
        <Typography variant="h4" className={classes.name}>
          {Name}
        </Typography>
        <Typography variant="h6" className={classes.body}>
          {Occupation}
        </Typography>
        <Typography variant="body1" className={classes.details}>
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

ListCard.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  removeData: PropTypes.func.isRequired
};

export default withStyles(Styles)(ListCard);
