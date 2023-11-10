import { Grid } from "@mui/material";
import './StatsCard.css'
import PropTypes from 'prop-types';
import React from "react";

const StatsCard = props => {
    return(
        <Grid paddingY={2} className="bg-grey" item lg={3} md={6} xs={12}  
        justifyContent="center"
        alignItems="center">
            <p className="margin_15 font-large text-center">{props.Statistic}</p>
            <p className="margin_15 text-center">{props.brief}</p>
        </Grid>
    );

}
StatsCard.propTypes = {
    Statistic: PropTypes.string.isRequired,
    brief: PropTypes.string.isRequired,
};
export default StatsCard;