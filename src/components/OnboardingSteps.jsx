import React, {cloneElement, useEffect} from "react";
import { Steps } from "antd";

export default function OnboardingSteps(props){
    useEffect(() => {
        async function removeVertClass(){
            const stepsInDom = await document.querySelector('.ant-steps');
            console.log(stepsInDom);
            console.log('removing vert class...');
            stepsInDom.classList.remove('ant-steps-vertical');
            console.log(stepsInDom);
        }
        removeVertClass();
    },[])
    const modifiedProps = {
        ...props,
        className: (props.className || '').replace('ant-steps-vertical', '') + ' ant-steps-horizontal ant-steps-label-vertical'
    };
    
    return cloneElement(<Steps />, modifiedProps);
};

