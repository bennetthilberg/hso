import React from "react";
import { Button, Typography } from "antd";
import LearningSketching from "../assets/learning_sketching.svg";
import { useNavigate } from "react-router-dom";
import { RightCircleOutlined, RightOutlined, UserOutlined } from "@ant-design/icons";
import { slideInBouncy, slideOutBouncy } from "../transitions";
import { motion } from "framer-motion";
import search from "../assets/search.svg";

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
            variants={slideInBouncy}
        >
            <div className="parentPage" id="welcome">
                <img src={search} 
                style={{
                    height: '372px',
                    width: '372px'
                }}
                />
                <Typography className="welcomeMain"><strong>Welcome to LeapLink!</strong></Typography>
                <Typography className="welcomeSub">Find your perfect oppurtunity.</Typography>
                <div className="buttons">
                    <Button type='primary' id='getStartedBtn'
                        onClick={handleGetStarted}>
                        Get Started <span className="iconSpan whiteIcon" id='gsChevron'><RightOutlined /></span>
                    </Button>
                    <Button type='default'
                        className="blackTextBtn"
                    >
                        Login <span className="iconSpan"><UserOutlined /></span>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
