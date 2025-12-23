// app/@modal/layout.tsx
"use client";
import { LifeSkillProvider } from "@/context/LifeSkillContext";

export default function ModalLayout({ children }) {
  return <LifeSkillProvider>
    {children}
    </LifeSkillProvider>;
}
