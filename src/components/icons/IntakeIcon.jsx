// src/components/icons/IntakeComboIcon.jsx
import React from "react";
import { ClipboardList, BadgeCheck, Sparkles } from "lucide-react";

export default function IntakeComboIcon({ className = "w-9 h-9" }) {
  return (
    <div className={`relative ${className}`}>
      <ClipboardList className="w-full h-full" />
      <BadgeCheck className="w-4 h-4 absolute -bottom-1 -right-1" />
      <Sparkles className="w-3 h-3 absolute -top-1 -left-1 opacity-80" />
    </div>
  );
}
