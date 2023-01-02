import React from "react";
import RestaurantItem from "./RestaurantItem";
import PropTypes from "prop-types";
import Grid from "./styled/Grid";

const RestaurantsList = ({ restaurants }) => {
  return (
    <Grid>
      {restaurants.map((restaurants) => (
        <RestaurantItem key={restaurants.id} {...restaurants} />
      ))}
    </Grid>
  );
};

RestaurantsList.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      pictureId: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default RestaurantsList;
