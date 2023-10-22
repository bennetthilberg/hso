import React, { useState, useEffect } from "react";
import { Steps, Typography } from "antd";
import { motion } from "framer-motion";
import '../secondarystyles/Results.scss';
import { onboardingUserAtom } from "../globalAtoms";
import { useAtom } from "jotai";
import { slideInBouncy } from "../transitions";
import ResultCard from "../components/ResultCard";

export default function Results() {
    const [onboardingUser, setOnboardingUser] = useAtom(onboardingUserAtom);
    // this useEffect is just for testing purposes
    useEffect(() => {
        if (!onboardingUser.firstName) {
            setOnboardingUser({ firstName: 'Examplename' });
        }
    }, [])
    return (
        <motion.div
            className="resultsPage"
            animate="animate"
            initial="initial"
            exit="exit"
            variants={slideInBouncy}
        >
            <div className="resultsDisplay">
                <Typography className="resultAnnouncement"><h1 className="resultHeading">{onboardingUser.firstName}, we found 5 oppurtunities for you!</h1></Typography>
                <ResultCard 
                title={'Histology Research'} 
                mentorName={'Dr. Reyes'}
                desc={'Contribute to and learn about the latest research in Histoloy.'}
                avatarSrc={'https://profiles.stanford.edu/proxy/api/cap/profiles/10186/resources/profilephoto/350x350.1509507155149.jpg'}
                />
                <ResultCard 
                title={'Virology Research'} 
                mentorName={'Dr. Avila'}
                desc={'Learn and develop worthwhile skills in Virology research.'}
                avatarSrc={'https://med.stanford.edu/services/api/cap/profiles/photocache.37019.jpg'}
                />
               <ResultCard 
                title={'Botany Research'} 
                mentorName={'Dr. Ellis'}
                desc={'Conduct experiments on plants and gain research skills.'}
                avatarSrc={'https://med.stanford.edu/services/api/cap/profiles/photocache.24004.jpg'}
                />
                <ResultCard 
                title={'Ecology Research'} 
                mentorName={'Dr. Summers'}
                desc={'Learn data analysis and ecosystem modeling in Ecology.'}
                avatarSrc={'https://med.stanford.edu/services/api/cap/profiles/photocache.49740.jpg'}
                />
                <ResultCard 
                title={'Zoology Research'} 
                mentorName={'Dr. Lorem'}
                desc={'Learn data analysis and ecosystem modeling in Ecology.'}
                avatarSrc={'https://med.stanford.edu/services/api/cap/profiles/photocache.34839.jpg'}
                />
            </div>
            
           
            <Steps
                className="resultsSteps"
                labelPlacement="vertical"
                direction="horizontal"
                responsive={false}
                step={4}
                current={4}
                items={[
                    {
                        title: 'Profile',
                    },
                    {
                        title: 'School',
                    },
                    {
                        title: 'Match',
                    }
                ]}
            ></Steps>
            

            
        </motion.div>
    );
}