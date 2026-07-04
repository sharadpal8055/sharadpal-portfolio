"use client";

export default function SkillsBackground() {
  return (
    <>
      <div className="grid-bg absolute inset-0 opacity-30" />

      <div className="noise" />

      <div className="absolute left-[-220px] top-20 h-[520px] w-[520px] rounded-full bg-orange-500/10 blur-[150px]" />

      <div className="absolute right-[-180px] bottom-10 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-[140px]" />
    </>
  );
}