import React from "react";
import Image from "next/image";

const AboutImage: React.FC = () => {
  return (
    <div className="relative mx-auto w-full max-w-[420px]">
      <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[80px]" />

      <div className="relative overflow-hidden rounded-3xl p-2">
        <div className="relative h-[340px] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/profile.webp"
            alt="Profile"
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImage;
