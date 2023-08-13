import React from "react";
import { Button, Typography } from "antd";
import LearningSketching from "../assets/learning_sketching.svg";

export default function Welcome() {
    return (
        <div className="parentPage" id="welcome">
            <img src={LearningSketching} />
            <Typography className="welcomeMain"><strong>Welcome to Foobar!</strong></Typography>
            <Typography className="welcomeSub">The quick brown fox jumps over.</Typography>
            <div className="buttons">
                <Button type='primary' id='getStartedBtn'>Get Started</Button>
                <Button type='default'>Login</Button>
            </div>

        </div>
    );
}
