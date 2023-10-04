import {atom} from 'jotai';

export const onboardingUserAtom = atom({});
export const quizTrackerAtom = atom({
    globalCurrentQuestion: 0,
    responses: []
});

