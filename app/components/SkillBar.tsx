"use client";
import React, { ReactElement } from "react";
import { motion } from "framer-motion";

type SkillBarProps = {
  Logo: ReactElement;
  title: string;
  percentage: number;
};

const SkillBar: React.FC<SkillBarProps> = ({ Logo, title, percentage }) => {
  return (
    <div className="shadow-2xl rounded-xl border-b-4 border-[#33353F] bg-black text-white">
      <div className="p-2 flex items-center justify-between ">
        <div className="flex gap-4 items-center">
          {Logo}
          <span className="font-semibold">{title}</span>
        </div>
        <span className="font-semibold">{`${percentage}%`}</span>
      </div>
      {/* Animated progress bar */}
      <div className="bg-[#33353F] h-2 rounded-lg overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="bg-[#a855f7] h-full"
        />
      </div>
    </div>
  );
};

export default SkillBar;
