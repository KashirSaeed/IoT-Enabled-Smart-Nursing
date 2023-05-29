import { Box, Grid } from "@mui/material";
import React from "react";
import StatsCard from "../statsCard/StatsCard";
import './StatsSection.css'

const StatsSection = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid  container className="bg">
                <StatsCard brief="Hospitals in Collaboration" Statistic="7000+"/>
                <StatsCard brief="Improved Nursing Care Workflow" Statistic="98%"/>
                <StatsCard brief="Client Satisfaction" Statistic="96%"/>
                <StatsCard brief="Abnormal Activity Detection" Statistic="96.8%"/>
            </Grid>
        </Box>
    );
}
export default StatsSection;