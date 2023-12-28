import { Box } from "@mui/material";
import React from "react";
import HeroBanner from "../components/HeroBanner";
import SearchExcercises from "../components/SearchExcercise";
import Excercises from "../components/Excercises";
import Kcal from "../components/kcal";
import MobileLayout from "../components/mobileView";
import '../pages/home.css'

export default function Home() {
    return (
        <Box >
                <MobileLayout />
        </Box>
    )
}