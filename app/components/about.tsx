"use client"

import Image from "next/image"
import tkdFoto from "../../public/tkdFoto.webp"

export function About() {
    return (
        <section className="min-h-screen flex flex-col items-center bg-(--bg-primary) lg:flex-row lg:items-center lg:justify-center lg:gap-8 lg:px-12" id="projeto">

            {/* Lado Esquerdo - Texto (50%) */}
            <div className="w-full lg:w-1/2 px-6 lg:px-8">
                <h1 className="text-2xl text-gray-300 font-black leading-8 mt-20 lg:mt-0 text-center lg:text-left text-shadow-lg/30 lg:text-5xl lg:leading-tight">
                    TAEKWONDO UNINDO FORÇAS
                </h1>

                <p className="text-[#f5f5f5] text-lg leading-8 my-8 lg:my-12 text-justify lg:text-xl lg:leading-relaxed">
                    Projeto Social Taekwondo Unindo Forças transforma vidas há mais de 3 anos por meio da arte marcial. Ensinamos Taekwondo com foco em disciplina, respeito e superação. Formamos cidadãos dentro e fora do tatame, com técnica e valores. Unimos esporte e propósito social para fortalecer a comunidade.
                </p>
            </div>

            {/* Lado Direito - Imagem (50%) */}
            <div className="w-full lg:w-1/2 flex items-center justify-center px-6 lg:px-8 mb-12 lg:mb-0">
                <div className="relative w-full max-w-lg lg:max-w-none">
                    <Image
                        src={tkdFoto}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-2xl w-full h-auto"
                        priority
                    />
                </div>
            </div>

        </section>
    )
}