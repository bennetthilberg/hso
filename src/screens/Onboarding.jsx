import React, { useState, useEffect, useMemo } from "react";
import { Button, Typography, Steps } from "antd";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import { motion } from "framer-motion";
import { slideIn, slideOut } from "../transitions";


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
            variants={slideIn}
        >
            <div className="parentPage" id="onboarding">
                <motion.div className="onboardingCompMotionHolder">
                    {currentStep === 0 && <Onboarding1 nextStep={nextStep} />}
                    {currentStep === 1 && <Onboarding2 nextStep={nextStep} />}
                    {currentStep === 2 && <Onboarding3 nextStep={nextStep} />}
                </motion.div>
                <Steps
                    labelPlacement="vertical"
                    direction="horizontal"
                    responsive={false}
                    step={currentStep}
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