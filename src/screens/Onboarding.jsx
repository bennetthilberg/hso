import React, { useState, useEffect, useMemo } from "react";
import { Button, Typography, Steps } from "antd";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";
import OnboardingQuiz from "../components/OnboardingQuiz";
import QuizGetReady from "../components/QuizGetReady";
import QuizDone from "../components/QuizDone";


//import { HomeOutlined,UserOutlined } from "@ant-design/icons";

export default function Onboarding() {
    const [currentStep, setCurrentStep] = useState(0);

    function nextStep() {
        setCurrentStep(currentStep + 1);
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideInBouncy}
        >
            <div className="parentPage" id="onboarding">
                <motion.div className="onboardingCompMotionHolder">
                    {currentStep === 0 && <Onboarding1 nextStep={nextStep} />}
                    {currentStep === 1 && <Onboarding2 nextStep={nextStep} />}
                    {currentStep === 2 && <QuizGetReady nextStep={nextStep} />}
                    {currentStep === 3 && <OnboardingQuiz nextStep={nextStep} />}
                    {currentStep === 4 && <QuizDone nextStep={nextStep}/>}
                </motion.div>
                <Steps
                    labelPlacement="vertical"
                    direction="horizontal"
                    responsive={false}
                    step={currentStep}
                    current={currentStep}
                    items={[
                        {
                            title: 'Profile',
                        },
                        {
                            title: 'School',
                        },
                        {
                            title: 'Match',
                        }
                    ]}
                ></Steps>
            </div>
        </motion.div>

    );
}