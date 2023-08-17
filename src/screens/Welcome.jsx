import React from "react";
import { Button, Typography } from "antd";
import LearningSketching from "../assets/learning_sketching.svg";
import { useNavigate } from "react-router-dom";
import { RightCircleOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { slideIn, slideOut } from "../transitions";
import { motion } from "framer-motion";

export default function Welcome() {
    const navigate = useNavigate();
    function handleGetStarted(e) {
        navigate('/onboarding');
    }
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={slideIn}
        >
            <div className="parentPage" id="welcome">
                <img src={LearningSketching} />
                <Typography className="welcomeMain"><strong>Welcome to Foobar!</strong></Typography>
                <Typography className="welcomeSub">The quick brown fox jumps over.</Typography>
                <div className="buttons">
                    <Button type='primary' id='getStartedBtn'
                        onClick={handleGetStarted}>
                        Get Started <span className="iconSpan whiteIcon" id='gsChevron'><RightOutlined /></span>
                    </Button>
                    <Button type='default'

                    >
                        Login <span className="iconSpan"><UserOutlined /></span>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
