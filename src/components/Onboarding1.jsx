import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import PhoneInput from 'antd-phone-input'
import { Button } from "antd";
import { motion } from "framer-motion";



export default function Onboarding1({ nextStep }) {
    const [localStep, setLocalStep] = useState(0);
    const [mainText, setMainText] = useState('Let\'s get your account set up.');
    useEffect(() => {
        console.log('i rendered!!');
    }, []);
    function localNextStep() {

    }
    return (
        <div className="onboardingComp o1">
            <Typography className="main o1">{mainText}</Typography>
            <motion.div className="onboardingCompBody">
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
                        name="email"
                        className='o1'
                        requiredMark={false}
                        rules={[{
                            required: true,
                        }]}
                    >
                        <Input
                            className="onboardingInput"
                            placeholder="Phone Number (Optional)"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button
                            className="onboardingSubmitBtn"
                            onClick={localNextStep}
                            htmlType='submit'
                            type='primary'

                        >Next</Button>
                    </Form.Item>
                </Form>

            </motion.div>
        </div>
    );
}