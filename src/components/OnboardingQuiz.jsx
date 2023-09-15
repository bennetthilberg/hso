import React, { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom, quizTrackerAtom } from "../globalAtoms";
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
// figures are strings of the path to the image, not the actual image

export default function OnboardingQuiz() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    const [quizTracker, setQuizTracker] = useAtom(quizTrackerAtom);
    const progress = useMemo(() => quizTracker.currentQuestion, [quizTracker.currentQuestion]);
    // progress is the index of the current question in quizPrompts
    const [currentQuestion, setCurrentQuestion] = useState(quizPrompts[progress]);
    // current question is the actual question object in quizPrompts

    
    return (
        <div id='onboardingQuizComp'>
            <PromptHolder
                prompt={currentQuestion.prompt}
            />


            <AnswerMenu 
                options={currentQuestion.options}
            />


        </div>
    );
}
