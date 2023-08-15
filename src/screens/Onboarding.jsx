import React, {useState,useEffect,useMemo} from "react";
import { Button, Typography,Steps } from "antd";
import OnboardingSteps from "../components/OnboardingSteps";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import { HomeOutlined,UserOutlined } from "@ant-design/icons";

export default function Onboarding(){
    const [currentStep, setCurrentStep] = useState(0); 

    function nextStep(){
        setCurrentStep(currentStep+1);
    }
    return(
        <div className="parentPage" id="onboarding">
            <OnboardingSteps
                //direction="vertical"
                /*
                want:
                .ant-steps-horizontal
                .ant-steps-label-vertical
                */
                labelPlacement="vertical"
                step={currentStep}
                items={[
                    {                        
                        //icon: <UserOutlined />,
                        title: 'Profile',
                        content: <Onboarding1 nextStep={nextStep}/>
                    },
                    {
                        //icon: <HomeOutlined/>, // antd does not have a school icon, maybe try BankOutlined?
                        title: 'School',
                        content: <Onboarding2 nextStep={nextStep}/>
                    },
                    {

                    }
                ]}
            ></OnboardingSteps>
        </div>
    );
}