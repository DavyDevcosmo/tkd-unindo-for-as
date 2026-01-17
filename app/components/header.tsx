"use client";
import Image from "next/image";
import { LuSquareMenu } from "react-icons/lu";
import logotkd from "../../public/logo-taekwondo-unindo.png";

export function Header() {
    return (
        <header className="bg-(--bg-primary) w-full h-18 flex items-center justify-between px-8">
            <div className="gap-3 flex justify-center items-center">
                <Image
                    src={logotkd}
                    alt="Logo do Taekwondo"
                    width={48}
                    height={48}
                />
                <h1 className="text-white font-bebas text-lg tracking-wider">TAEKWONDO UNINDO FORÇAS</h1>
            </div>
            <div>
                <LuSquareMenu size={35} color="white" />
            </div>
        </header>
    )
}