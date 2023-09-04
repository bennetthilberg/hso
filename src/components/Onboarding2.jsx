import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { Form, Input, Select,AutoComplete } from "antd";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";

export default function Onboarding2({ nextStep }) {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    useEffect(() => {
        console.log(onboardingUser);
    }, [])
    return (
        <motion.div
            className="onboardingComp o2 o"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <Typography className="main o2 o">
                Hi, {onboardingUser.firstName}! Let's talk school.
            </Typography>
            <Form>
                <Typography className="onboardingFormSubtext o2 o">
                    What school do you go to?
                </Typography>
                <Typography className="onboardingFormSubsubtext o" id='schoolNameST'>
                    Enter your school's name or CEEB code.
                </Typography>
                <Form.Item
                    name='userSchool'
                    className='o2 o'
                >

                    <AutoComplete type="text" className="onboardingSelect" placeholder="School" />

                </Form.Item>
                <Form.Item
                    name='userGradYear'
                    className='o2 o'

                >
                    <Select
                        placeholder='What grade are you in?'
                        className="onboardingSelect o sel"
                        /*style={{
                            height: '40px',
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.2)',
                            borderRadius: '10px',
                            display: 'grid',
                            placeItems: 'center'
                        }}*/
                    >
                        <Select.Option className='o' value="2027">Freshman</Select.Option>
                        <Select.Option className='o' value="2026">Sophomore</Select.Option>
                        <Select.Option className='o' value="2025">Junior</Select.Option>
                        <Select.Option className='o' value="2024">Senior</Select.Option>
                    </Select>
                </Form.Item>
            </Form>
        </motion.div>
    );
}