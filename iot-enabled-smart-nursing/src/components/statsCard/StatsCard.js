import { Grid } from "@mui/material";
import './StatsCard.css'
import PropTypes from 'prop-types';
import React from "react";

const StatsCard = props => {
    return(
        <Grid paddingY={5} className="bg-grey" container lg={3} md={6} xs={12}
        direction="column"
        justifyContent="center"
        alignItems="center">
            <h1 className="margin-zero text-center">{props.Statistic}</h1>
            <h2 className="margin-zero text-center">{props.brief}</h2>
        </Grid>
    );

}
StatsCard.propTypes = {
    Statistic: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
};
export default StatsCard;