// app/layout.jsx
"use client";
import { LifeSkillProvider } from "@/context/LifeSkillContext";

export default function SurveyLayout({ children }) {
  return <LifeSkillProvider>{children}</LifeSkillProvider>;
}
