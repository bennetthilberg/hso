import React from "react";
import { BrowserRouter, Link,Routes,Route } from "react-router-dom";
import ThemePreview from "./ThemePreview";
import Welcome from "./screens/Welcome";
import './App.scss'


export default function App() {
    return (
        <>
        
        <BrowserRouter>
            <Routes>
                <Route path='/theme-preview' element={<ThemePreview/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
            </Routes>
            
        </BrowserRouter>
        
        </>
    );
}