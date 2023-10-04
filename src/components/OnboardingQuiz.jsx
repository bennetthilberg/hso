import React, { useEffect, useMemo, useState } from "react";
import { useAtom } from "jotai";
import { onboardingUserAtom, quizTrackerAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete, Button } from "antd";
import Typography from 'antd/es/typography'
import '../secondarystyles/onboardingQuiz.scss' // *not using App.scss
import AnswerMenu from "./AnswerMenu";
import PromptHolder from "./PromptHolder";
import { AnimatePresence,motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";

// keep options short, 1-3 words
const quizPrompts = [
    {
        prompt: 'Would you prefer an internship, or research?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['Internship', 'Research'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'Do you prefer individual or team work?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['Individual', 'Team'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'Which of these fields interests you the most?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['Finance', 'Technology', 'Health', 'Engineering'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'How much time do you have to commit per week?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['1-5 hours', '6-10 hours', '11-20 hours', '21+ hours'],
        figures: []
    },
    {
        prompt: 'Are you looking for paid or unpaid opportunities?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['Paid', 'Unpaid'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    {
        prompt: 'Do you want in-person, remote, or hybrid opportunities?',
        promptFigure: 'https://via.placeholder.com/150',
        options: ['In-person', 'Remote', 'Hybrid'],
        figures: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150']
    },
    
]
// figures are strings of the path to the image, not the actual image

export default function OnboardingQuiz({nextStep}) {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    const [quizTracker, setQuizTracker] = useAtom(quizTrackerAtom);

    const progress = useMemo(() => quizTracker.globalCurrentQuestion);
    // progress is the index of the current question in quizPrompts

    const currentQuestion = useMemo(() => quizPrompts[progress])
    // current question is the actual question object in quizPrompts

    /*
        quizPrompts is constant
        quizTracker -> quizTracker.globalCurrentQuestion -> progress -> currentQuestion
    */

    const [showNextQuestion, setShowNextQuestion] = useState(false);
    

    useEffect(() => {
        if(showNextQuestion){
            setQuizTracker((prev) => ({...prev, globalCurrentQuestion: prev.globalCurrentQuestion + 1}));
            setShowNextQuestion(false);
        }
    }, [showNextQuestion, setQuizTracker]);
    useEffect(() => {
        console.log("Current progress:", progress);
        if(progress === quizPrompts.length){
            console.log("Quiz finished");
            nextStep();
        }
    }, [progress]);
    useEffect(() => {
        console.log("showNextQuestion changed:", showNextQuestion);
    }, [showNextQuestion]);
    
 
    function onAnswerSelect(answer) {
        // 'answer' is the index of the answer selected in currentQuestion.options array
        console.log('answer arg is:');
        console.log(answer);
        console.log(`user answered option ${answer} which is '${currentQuestion.options[answer]}'`)
        setQuizTracker(
            (old) => {
                return (
                    {
                        ...old,
                        responses: [...old.responses, currentQuestion.options[answer]]
                    }
                )
            }
        );
        console.log('responses is now:');
        console.log(quizTracker.responses);
        /*setQuizTracker(oldQuizTracker => {
            return {
                ...oldQuizTracker,
                globalCurrentQuestion: oldQuizTracker.globalCurrentQuestion + 1
            }
        })* this is now done in useEffect, remove when sure it works*/
        //setIsAnimatingOut(true);
        setShowNextQuestion(true);
        
    }

    return (
        <motion.div id='onboardingQuizComp'>
            <AnimatePresence mode='wait'>
                {quizPrompts[progress] && ( // Check if the question exists
                    <motion.div 
                    className='onboardingQuizAnimatePresence'
                        key={progress}
                        animate="animate"
                        initial="initial"
                        exit="exit"
                        variants={slideInBouncy}
                    >
                        <PromptHolder
                            prompt={quizPrompts[progress].prompt}
                            promptFigure={quizPrompts[progress].promptFigure}
                        />
                        <AnswerMenu
                            options={quizPrompts[progress].options}
                            figures={quizPrompts[progress].figures}
                            onAnswerSelect={onAnswerSelect}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
    
}
