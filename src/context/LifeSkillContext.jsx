"use client";
import React, { createContext, useContext, useState } from 'react';

const LifeSkillContext = createContext();

export const LifeSkillProvider = ({ children }) => {
    const [surveySkillsMap, setSurveySkillsMap] = useState({}); // { survey2: [...], survey3: [...] }

    // Replace the skills for a specific survey
    const addSkillsForSurvey = (surveyId, skills) => {
        setSurveySkillsMap((prev) => ({
            ...prev,
            [surveyId]: skills,
        }));
    };

    // Combine all unique life skills from all surveys
    const getAllSkills = () => {
        return [...new Set(Object.values(surveySkillsMap).flat())];
    };

    return (
        <LifeSkillContext.Provider value={{ addSkillsForSurvey, getAllSkills }}>
            {children}
        </LifeSkillContext.Provider>
    );
};

export const useLifeSkills = () => useContext(LifeSkillContext);
