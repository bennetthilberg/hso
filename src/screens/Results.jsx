import React, { useState, useEffect } from "react";
import { Steps } from "antd";
import { motion } from "framer-motion";
import '../secondarystyles/Results.scss';
import { onboardingUserAtom } from "../globalAtoms";
import { useAtom } from "jotai";
import { slideInBouncy } from "../transitions";

export default function Results() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    // this useEffect is just for testing purposes
    useEffect(() => {
        if (!onboardingUser.firstName) {
            setOnboardingUser({ firstName: 'Examplename' });
        }
    }, [])
    return (
        <motion.div
            className="resultsPage"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <div className="resultsDisplay">
                <h1>{onboardingUser.firstName}, we found 7 oppurtunities for you!</h1>
            </div>
            <Steps
                labelPlacement="vertical"
                direction="horizontal"
                responsive={false}
                step={4}
                current={4}
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
        </motion.div>
    );
}