"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [inset, setInset] = useState<number>(50);
  return (
    <main className="flex bg-zinc-900 min-h-screen flex-col items-center gap-10 justify-center p-24">
      <div
        className="relative h-[438px] w-[640px] overflow-hidden rounded-lg cursor-none"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const y = e.clientY - rect.top;
          const percentage = (y / rect.height) * 100;
          setInset(percentage);
        }}
      >
        <div
          className="bg-white/50 backdrop-blur-lg w-full h-2 absolute z-20 left-0 -mt-1"
          style={{
            top: `${inset}%`,
          }}
        ></div>
        <Image
          src="/milosz-roman-SFmFWsz87Es-unsplash.jpg"
          alt="milosz-roman-SFmFWsz87Es-unsplash"
          width={640}
          height={438}
          priority
          className="absolute left-0 top-0 z-10 h-[438px] w-[640px]"
          style={{
            clipPath: `inset(${inset}% 0 0 0)`,
          }}
        />
        <Image
          src="/joel-jasmin-forestbird-1JapEeqwLsM-unsplash.jpg"
          alt="joel-jasmin-forestbird-1JapEeqwLsM-unsplash"
          width={640}
          height={438}
          priority
          className="absolute left-0 top-0 h-[438px] w-[640px]"
        />
      </div>

      <div
        className="relative h-[438px] w-[640px] overflow-hidden rounded-lg cursor-none"
        onMouseMove={(e: React.MouseEvent<HTMLDivElement>) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const percentage = (x / rect.width) * 100;
          setInset(percentage);
        }}
      >
        <div
          className="bg-white/50 backdrop-blur-lg h-full w-2 absolute z-20 top-0 -ml-1"
          style={{
            left: `${inset}%`,
          }}
        ></div>
        <Image
          src="/milosz-roman-SFmFWsz87Es-unsplash.jpg"
          alt="milosz-roman-SFmFWsz87Es-unsplash"
          width={640}
          height={438}
          priority
          className="absolute left-0 top-0 z-10 h-[438px] w-[640px]"
          style={{
            clipPath: `inset(0 0 0 ${inset}%)`,
          }}
        />
        <Image
          src="/joel-jasmin-forestbird-1JapEeqwLsM-unsplash.jpg"
          alt="joel-jasmin-forestbird-1JapEeqwLsM-unsplash"
          width={640}
          height={438}
          priority
          className="absolute left-0 top-0 h-[438px] w-[640px]"
        />
      </div>
    </main>
  );
}
