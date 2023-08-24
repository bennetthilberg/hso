import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import Form from "antd/es/form/Form";
import Input from "antd/es/input/Input";
import PhoneInput from 'antd-phone-input'
import { Button,Switch } from "antd";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";



export default function Onboarding1({ nextStep }) {
    const [localStep, setLocalStep] = useState(0);
    const [mainText, setMainText] = useState('Let\'s get your account set up.');
    
    useEffect(() => {
        if (localStep == 1) {
            setMainText('Secure your account');
        }
    }, [localStep]);
    function localNextStep() {
        setLocalStep(localStep + 1);
    }
    function handleNext(isFinalStep) {
        if(isFinalStep){
            nextStep();
            return;
        }
        localNextStep();
        //nextStep();
    }
    // note: make the requireds true for prod
    return (
        <div className="onboardingComp o1">
            <Typography className="main o1">{mainText}</Typography>
            {
                localStep === 0 &&
                <motion.div
                    className="onboardingCompBody"
                    id='o1part0'
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    variants={slideInBouncy}
                >
                    <Form>
                        <Typography className="onboardingFormSubtext">What's your name?</Typography>
                        <Form.Item
                            className='o1'
                            name="firstName"
                            requiredMark={false}
                            rules={[{
                                required: false,
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
                                required: false,
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
                                required: false,
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
                                required: false,
                            }]}
                        >
                            <Input
                                className="onboardingInput"
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="phoneNumber"
                            className='o1'
                            requiredMark={false}
                            rules={[{
                                required: false,
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
                                onClick={() => {handleNext(false)}}
                                htmlType='submit'
                                type='primary'

                            >Next</Button>
                        </Form.Item>
                    </Form>

                </motion.div>
            }
            {
                localStep === 1 &&
                <motion.div

                    id='o1part1'
                    className="onboardingCompBody"
                    animate='animate'
                    initial='initial'
                    exit='exit'
                    variants={slideInBouncy}
                >

                    <Form>
                        <Typography className="onboardingFormSubtext">Pick a password</Typography>
                        <Form.Item
                            name="password"
                            className='o1'
                            rules={[
                                ({ getFieldValue }) => ({
                                    validator(_, value) {                                
                                        if (value.length >= 8) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Too short!'));
                                    }
                                })
                            ]}
                        >
                            <Input.Password
                                placeholder="Password"
                                className="onboardingInput"
                            />


                        </Form.Item>
                        <Form.Item
                            name="confirm"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: 'Please confirm your password!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('The new password that you entered do not match!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password 
                            className="onboardingInput"
                            />
                        </Form.Item>
                        <Typography className="onboardingFormSubtext">2-Factor Authentication</Typography>
                        <Typography className="onboardingFormSubsubtext" id='o2fasubsub'>Text me a code when I log in for added security</Typography>
                        <Form.Item
                        name='2fa'
                        >
                            <Switch id='o2faSwitch'
                            
                            />
                        </Form.Item>
                        <Button
                        type='primary'
                        className="onboardingSubmitBtn"
                        onClick={()=>handleNext(true)}
                        >Next</Button>
                    </Form>

                </motion.div>
            }

        </div>
    );
}