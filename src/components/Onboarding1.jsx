import React, {useState,useEffect} from "react";
import Typography from "antd/es/typography/Typography";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import PhoneInput from 'antd-phone-input'



export default function Onboarding1({nextStep}){
    useEffect(() => {
        console.log('i rendered!!');
    },[]);
    return(
        <div className="onboardingComp">
            <Typography className="main o1">A little about you</Typography>
            <Form>
                <Typography className="onboardingFormSubtext">What's your name?</Typography>
                <Form.Item
                className='o1'
                name="firstName"
                requiredMark={false}
                rules={[{
                    required: true,
                    message: 'Please input your first name!'
                }]}
                >
                    <Input
                    className="onboardingInput"
                    placeholder="First Name"
                    />
                </Form.Item>
                <Form.Item
                name="lastName"
                className='o1'
                requiredMark={false}
                rules={[{
                    required: true,
                    message: 'Please input your last name!'
                }]}
                >
                    <Input
                    className="onboardingInput"
                    placeholder="Last Name"
                    />
                </Form.Item>


                <Typography className="onboardingFormSubtext">Pick a username</Typography>
                <Form.Item
                name="username"
                id='usernameSelect'
                className='o1'
                requiredMark={false}
                rules={[{
                    required: true,
                }]}
                >
                    <Input
                    className="onboardingInput"
                    placeholder="Username"
                    />
                </Form.Item>


                <Typography className="onboardingFormSubtext" id='contactInfoST'>Contact Info</Typography>
                <Typography className="onboardingFormSubsubtext">You choose who can see this.</Typography>
                <Form.Item
                name="email"
                className='o1'
                requiredMark={false}
                rules={[{
                    required: true,
                }]}
                >
                    <Input
                    className="onboardingInput"
                    placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                name="phone"
                className='o1'
                requiredMark={false}
                rules={[{
                    required: true,
                }]}
                >
                    <PhoneInput
                    id='oPhoneInput'
                    //className="onboardingInput"
                    
                    placeholder="Phone Number"
                    type='tel'
                    />
                </Form.Item>
            </Form>
        </div>
    );
}