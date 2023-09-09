import React, {useEffect, useState} from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete,Button } from "antd";
import Typography from 'antd/es/typography'
import '../secondarystyles/onboardingQuiz.scss' // *not using App.scss

export default function OnboardingQuiz() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    console.log(onboardingUser);
    return(
        <div id='onboardingQuizComp'>
            <div id="promptHolder">
                <Typography>
                    hi im prompt
                </Typography>
            </div>
            <div id="answerMenu">
                
            </div>
        </div>
    );
}