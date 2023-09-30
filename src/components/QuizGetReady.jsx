import React from "react";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";
import { Button, Typography, Steps } from "antd";

export default function QuizGetReady({nextStep}) {
    function handleBegin(){
        nextStep();
    }
    return (
        <motion.div className="onboardingQuizComp"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            {/* Put a quiz/matching type thing icon here */}
            <Typography  className="onboardingFormSubtext oInfoTitle">
                Time for a quiz!
            </Typography>
            <Typography className="onboardingFormSubtext oInfoSubtitle">
                We'll ask you a few questions to help match you with the perfect oppurtunities.
            </Typography>
            
            <Button className="onboardingButton" type="primary" size="large">
                Begin
            </Button>
        </motion.div>
    )
}