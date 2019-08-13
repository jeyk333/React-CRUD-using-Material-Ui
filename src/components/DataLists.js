import React from "react";
import PropTypes from "prop-types";
import ListCard from "./ListCard";

const DataLists = props => {
  const { lists, removeData, handleUpdate } = props;
  return (
    <div>
      {lists.map(data => {
        return (
          <ListCard
            key={data.Id}
            Id={data.Id}
            Name={data.Name}
            Occupation={data.Occupation}
            Description={data.Description}
            removeData={removeData}
            handleUpdate={handleUpdate}
          />
        );
      })}
    </div>
  );
};

DataLists.propTypes = {
  removeData: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired
};

export default DataLists;
