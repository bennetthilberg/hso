import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { Form, Input, Select } from "antd";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";

export default function Onboarding2({ nextStep }) {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    useEffect(() => {
        console.log(onboardingUser);
    }, [])
    return (
        <motion.div
            className="onboardingComp o2"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <Typography className="main o2">
                Hi, {onboardingUser.firstName}! Let's talk school.
            </Typography>
            <Form>
                <Typography className="onboardingFormSubtext o2">
                    What school do you go to?
                </Typography>
                <Typography className="onboardingFormSubsubtext" id='schoolNameST'>
                    Enter your school's name or CEEB code.
                </Typography>
                <Form.Item
                    name='userSchool'
                    className='o2'
                >

                    <Input type="text" className="onboardingInput" placeholder="School" />

                </Form.Item>
                <Form.Item
                    name='userGradYear'
                    className='o2'

                >
                    <Select
                        placeholder='What grade are you in?'
                        className="onboardingSelect"
                        /*style={{
                            height: '40px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '10px',
                            display: 'grid',
                            placeItems: 'center'
                        }}*/
                    >
                        <Select.Option value="2027">Freshman</Select.Option>
                        <Select.Option value="2026">Sophomore</Select.Option>
                        <Select.Option value="2025">Junior</Select.Option>
                        <Select.Option value="2024">Senior</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </motion.div>
    );
}