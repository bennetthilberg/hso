import React, {useEffect, useState} from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete,Button } from "antd";

export default function OnboardingQuiz() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    console.log(onboardingUser);
    return(
        <div id='onboardingQuizScreen'>

        </div>
    );
}