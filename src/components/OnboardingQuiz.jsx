import React, { useEffect, useState } from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom, onboardingQuizProgressAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete, Button } from "antd";
import Typography from 'antd/es/typography'
import '../secondarystyles/onboardingQuiz.scss' // *not using App.scss
import AnswerMenu from "./AnswerMenu";
import PromptHolder from "./PromptHolder";

const quizPrompts = [
    {
        prompt: 'Lorem ipsum or ipsum lorem?',
        options: ['Lorem ipsum', 'Ipsum lorem'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'One fish two fish or red fish blue fish?',
        options: ['One fish two fish', 'Red fish blue fish'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'Alpha, bravo, or charlie?',
        options: ['Alpha', 'Bravo', 'Charlie'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'Egg zample or Eggz Ample?',
        options: ['Egg zample', 'Eggz Ample'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    }
]

export default function OnboardingQuiz() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    const [onboardingQuizProgress, setOnboardingQuizProgress] = useAtom(onboardingQuizProgressAtom);
    console.log(onboardingUser);
    return (
        <div id='onboardingQuizComp'>
            <PromptHolder>

            </PromptHolder>
            <AnswerMenu>

            </AnswerMenu>
        </div>
    );
}
