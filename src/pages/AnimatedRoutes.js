import React from 'react';
import {
    Routes,
    Route,
    useLocation
} from "react-router-dom";
import Home from './Home';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfUse from './TermsOfUse';
import About from './About';
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence>
            <Routes location={location} key={location.pathname} >
                <Route index element={<Home />} />
                <Route path="about" element={<About />}></Route>
                <Route path="terms-of-use" element={<TermsOfUse />}></Route>
                <Route path="privacy-policy" element={<PrivacyPolicy />}></Route>
            </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes