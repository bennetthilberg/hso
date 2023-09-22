import React, { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom, quizTrackerAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete, Button } from "antd";
import Typography from 'antd/es/typography'
import '../secondarystyles/onboardingQuiz.scss' // *not using App.scss
import AnswerMenu from "./AnswerMenu";
import PromptHolder from "./PromptHolder";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";

const quizPrompts = [
    {
        prompt: 'Lorem ipsum or ipsum lorem?',
        promptFigure: 'https://via.placeholder.com/150',
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
    const progress = useMemo(() => quizTracker.globalCurrentQuestion/*, [quizTracker.currentQuestion]*/);
    // progress is the index of the current question in quizPrompts
    const currentQuestion = useMemo(() => quizPrompts[progress])
    //const [currentQuestion, setCurrentQuestion] = useState(quizPrompts[progress]);

    // TODO: currentQuestion is fucked, memoize it and have it be based on progress somehow. Rn it doesn't change (i think)

    // current question is the actual question object in quizPrompts

    function onAnswerSelect(answer) {
        // 'answer' is the index of the answer selected in currentQuestion.options array
        console.log('answer arg is:');
        console.log(answer);
        console.log(`user answered option ${answer} which is '${currentQuestion.options[answer]}'`)
    }

    return (
        <motion.div id='onboardingQuizComp'
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <PromptHolder
                prompt={currentQuestion.prompt}
                promptFigure={currentQuestion.promptFigure}
            />


            <AnswerMenu
                options={currentQuestion.options}
                figures={currentQuestion.figures}
                onAnswerSelect={onAnswerSelect}
            />


        </motion.div>
    );
}
