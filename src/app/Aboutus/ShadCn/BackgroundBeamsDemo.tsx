"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";
import {Particles} from "@/components/magicui/particles";
export default function ParticlesDemo() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
  }, [resolvedTheme]);

  return (

    <>
    <div className="relative flex h-[460px] mt-[70px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background">
      <span className="pointer-events-none z-10 whitespace-pre-wrap text-center text-8xl font-semibold leading-none">
      <div className="relative justify-center">
      </div>
      </span>

      <Particles
        className="absolute inset-0 z-0"
        quantity={100}
        ease={80}
        color={color}
        refresh
      />
       <CoolMode>
        <Button className="p-0 w-full h-full flex flex-col bg-white text-black hover:bg-white hover:text-black shadow-none cursor-pointer">
        <h1 style={{lineHeight: 1.2}} className="text-5xl text-black leading-9 md:text-8xl font-bold text-center">
          The <span className="text-blue-600">World</span> Around <br /> 
          <span className="text-8xl text-blue-600">Cybernaut</span>
        </h1>
        </Button>
      </CoolMode>
    </div>



    
    
    </>
  );
}


