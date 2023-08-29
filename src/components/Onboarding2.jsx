import React, {useState,useEffect} from "react";
import Typography from "antd/es/typography/Typography";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";

export default function Onboarding2({nextStep}){    
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    useEffect(() => {
        console.log(onboardingUser);
    },[])
    return(
        <div>
            <Typography className="main o2">
                Hi, {onboardingUser.firstName}! Where do you go to school?
            </Typography>
        </div>
    );
}