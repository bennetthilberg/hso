import React from "react";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";
import { Button, Typography, Steps } from "antd";

export default function QuizGetReady({ nextStep }) {
    function handleBegin() {
        nextStep();
    }
    return (
        <motion.div className="onboardingQuizComp qgrComp"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <div className="qgrImageHolder">
                <img src="src/assets/quizthing.svg" className="qgrImage" />
            </div>

            <div className="qgrContent">
                <Typography className="onboardingFormSubtext oInfoTitle">
                    Time for a quiz!
                </Typography>
                <Typography className="onboardingFormSubtext oInfosubTitle" >
                    We'll ask you a few questions to help match you with the perfect oppurtunities.
                </Typography>

                <Button id='qgrButton' type="primary" size="large"
                    onClick={handleBegin}
                >
                    Begin
                </Button>
            </div>

        </motion.div>
    )
}