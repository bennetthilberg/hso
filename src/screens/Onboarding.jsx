import React, {useState,useEffect,useMemo} from "react";
import { Button, Typography,Steps } from "antd";
import Onboarding1 from "../components/Onboarding1";
import Onboarding2 from "../components/Onboarding2";
import Onboarding3 from "../components/Onboarding3";
import { IonIcon } from "@ionic/react";

//import { HomeOutlined,UserOutlined } from "@ant-design/icons";

export default function Onboarding(){
    const [currentStep, setCurrentStep] = useState(0); 

    function nextStep(){
        setCurrentStep(currentStep+1);
    }
    return(
        <div className="parentPage" id="onboarding">
            <Steps
                labelPlacement="vertical"
                direction="horizontal"
                responsive={false}
                step={currentStep}
                items={[
                    {                        
                        //icon from ionicons?
                        
                        title: 'Profile',
                        content: <Onboarding1 nextStep={nextStep}/>
                    },
                    {
                        //icon from ionicons?
                        title: 'School',
                        content: <Onboarding2 nextStep={nextStep}/>
                    },
                    {
                        //icon from ionicons?
                        title: 'Match',
                        content: <Onboarding3 nextStep={nextStep}/>
                    }
                ]}
            ></Steps>
        </div>
    );
}