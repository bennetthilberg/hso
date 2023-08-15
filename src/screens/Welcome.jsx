import React from "react";
import { Button, Typography } from "antd";
import LearningSketching from "../assets/learning_sketching.svg";
import { useNavigate } from "react-router-dom";
import { RightCircleOutlined, UserOutlined } from "@ant-design/icons";

export default function Welcome() {
    const navigate = useNavigate();
    function handleGetStarted(e){
        navigate('/onboarding');
    }
    return (
        <div className="parentPage" id="welcome">
            <img src={LearningSketching} />
            <Typography className="welcomeMain"><strong>Welcome to Foobar!</strong></Typography>
            <Typography className="welcomeSub">The quick brown fox jumps over.</Typography>
            <div className="buttons">
                <Button type='primary' id='getStartedBtn' 
                    onClick={handleGetStarted}>
                        Get Started <span className="iconSpan"><RightCircleOutlined /></span>
                </Button>
                <Button type='default'

                >
                    Login <span className="iconSpan"><UserOutlined /></span>
                </Button>
            </div>

        </div>
    );
}
