import React, { useEffect, useState, Suspense } from "react";
import { Button, Typography } from "antd";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { useNavigate } from "react-router-dom";

export default function QuizDone({ nextStep }) {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => { 
            navigate('/results');
         }, 3000);
    }, [])
    return (
        <motion.div
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
            className="qdComp">
            <LoadingScreen />
        </motion.div>
    );
    
}
function LoadingScreen() {
    return (
        <div className='loadingDisplay'>
            <Typography className="qdTitle">
                <h1>Finding your perfect oppurtunities...</h1>
            </Typography>
            <div className="qdGifHolder">
                <img src="src/assets/magnify-loading.gif" className="qdGif"
                    style={{ display: 'grid', placeItems: 'center' }}
                />
                <Typography>
                    <h3
                        style={{ textAlign: "center" }}
                    >Don't worry, this won't take long!</h3>
                </Typography>
            </div>

        </div>
    );
}
