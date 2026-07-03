"use client";

import { useState } from "react";

import Logo from "./Logo";
import MobileNavLinks from "./MobileNavLinks";

import ResumeButton from "../common/ResumeButton";
import SocialLinks from "../common/SocialLinks";

import {
Sheet,
SheetContent,
SheetTrigger
} from "@/components/ui/sheet";

import { Menu } from "lucide-react";

import useActiveSection from "@/hooks/useActiveSection";

export default function MobileMenu(){

const [open,setOpen]=useState(false);

const activeSection=useActiveSection();

const closeMenu=()=>setOpen(false);

return(

<Sheet

open={open}

onOpenChange={setOpen}

>

<SheetTrigger asChild>

<button

aria-label="Open Navigation"

className="
glass
flex
xl:hidden

h-11
w-11

items-center
justify-center

rounded-full
"

>

<Menu size={22}/>

</button>

</SheetTrigger>

<SheetContent

side="right"

className="w-full sm:w-[420px] border-l border-white/10 bg-[#050505]/95 backdrop-blur-3xl"

>

<div className="flex h-full flex-col">

{/* Logo */}

<div className="pb-8">

<Logo/>

</div>

{/* Links */}

<MobileNavLinks

activeSection={activeSection}

onNavigate={closeMenu}

/>

{/* Spacer */}

<div className="flex-1"/>

{/* Resume */}

<div className="py-8">

<ResumeButton

mobile

onClick={closeMenu}

/>

</div>

<hr className="border-white/10"/>

{/* Social */}

<div className="py-8 flex justify-center">

<SocialLinks

onClick={closeMenu}

/>

</div>

<p className="pb-4 text-center text-sm text-zinc-500">

© {new Date().getFullYear()} Sharad Pal

</p>

</div>

</SheetContent>

</Sheet>

)

}