import React, {useState,useEffect} from "react";
import Typography from "antd/es/typography/Typography";

export default function Onboarding2({nextStep, onboardingUser}){
    return(
        <div>
            <Typography className="main o2">
                Hi, {onboardingUser.firstName}! Where do you go to school?
            </Typography>
        </div>
    );
}