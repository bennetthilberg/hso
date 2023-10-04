import React, {useEffect} from "react";
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import ThemePreview from "./ThemePreview";
import Welcome from "./screens/Welcome";
import './App.scss'
import Onboarding from "./screens/Onboarding";
import OnboardingQuiz from "./components/OnboardingQuiz";
import Results from "./screens/Results";


export default function App() {
    
    return (
        <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/theme-preview' element={<ThemePreview/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='/onboarding' element={<Onboarding/>}/>
                <Route path ='/results' element={<Results/>}/>
            </Routes>
            
        </BrowserRouter>
        
        </>
    );
}