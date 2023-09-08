import React, { useState, useEffect } from "react";
import Typography from "antd/es/typography/Typography";
import { useAtom } from "jotai";
import { onboardingUserAtom } from "../globalAtoms";
import { Form, Input, Select, AutoComplete,Button } from "antd";
import { motion } from "framer-motion";
import { slideInBouncy, slideOutBouncy } from "../transitions";

export default function Onboarding2({ nextStep }) {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    useEffect(() => {
        console.log(onboardingUser);
    }, []);
    function handleNext(){
        nextStep();
    }
    const schoolOptions = [
        { value: 'Academy of Holy Angels'},
        { value: 'Aitkin High School'},
        { value: 'Albany Area Secondary School'},
        { value: 'Alexandria High School'},
        { value: 'Andover High School' },
        { value: 'Annandale High School' },
        { value: 'Anoka High School' },
        { value: 'Apollo High School' },
        { value: 'Apple Valley High School' },
        { value: 'Warroad High School' },
        { value: 'Washburn High School' },
        { value: 'Watershed High School' },
        { value: 'Wayzata High School' },
        { value: 'Wellstone International High School' },
        { value: 'West Lutheran High School' }
    ]
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

                    <AutoComplete type="text" className="onboardingSelect" placeholder="School" options={schoolOptions}
                        size='small'
                        popupClassName="onboardingSelectPopup"
                        filterOption={(inputValue, option) =>
                            option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
                        }
                    />

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
                    <Button type='primary' className="o onboardingSubmitBtn" onClick={() => handleNext()}>
                        Next
                    </Button>
                </Form.Item>
            </Form>
        </motion.div>
    );
}