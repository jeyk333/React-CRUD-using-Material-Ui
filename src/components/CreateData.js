import React from "react";
import { withStyles, TextField, Button } from "@material-ui/core";
import PropTypes from "prop-types";
import Styles from "../style/Styles.js";

const CreateData = props => {
  const {
    Id,
    Name,
    Occupation,
    Description,
    handleChange,
    addData,
    saveUpdate,
    classes,
    isEditing
  } = props;

  return (
    <div className={classes.formWrapper}>
      <form onSubmit={addData}>
        <TextField
          id="name-id"
          name="Name"
          label="Name"
          onChange={handleChange}
          value={Name}
          fullWidth
          required
        />
        <TextField
          id="occupation-id"
          name="Occupation"
          label="Occupation"
          onChange={handleChange}
          value={Occupation}
          fullWidth
          required
        />
        <TextField
          id="desc-id"
          name="Description"
          label="Description"
          onChange={handleChange}
          value={Description}
          fullWidth
          required
        />
        {isEditing ? (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            onClick={e => saveUpdate(e, Id)}
            fullWidth
          >
            Update
          </Button>
        ) : (
          <Button
            type="submit"
            variant="outlined"
            className={classes.button}
            fullWidth
          >
            Submit
          </Button>
        )}
      </form>
    </div>
  );
};

CreateData.propTypes = {
  classes: PropTypes.object.isRequired,
  Id: PropTypes.number,
  Name: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  Occupation: PropTypes.string.isRequired,
  addData: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  saveUpdate: PropTypes.func.isRequired
};

export default withStyles(Styles)(CreateData);
