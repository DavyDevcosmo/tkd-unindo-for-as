"use client"
import Image from "next/image";
import bgCta from "../../public/bg-cta.webp"

export function CallToAction() {
    return (
        <section className="relative w-full h-[83dvh] overflow-hidden bg-black/70 lg:h-screen"
            id="inicio">

            <Image
                src={bgCta}
                alt="imagem de um lutador de taekwondo"
                className="object-cover object-center lg:object-[center_top]  "
                fill
                priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">

                <h1 className="text-4xl leading-11 font-bold text-gray-200 text-center max-w-sm text-shadow-lg/30 lg:text-6xl lg:max-w-3xl lg:leading-20">
                    UM PROJETO QUE MUDA HISTÓRIAS
                </h1>

                <h3 className="text-(--text-secondary) text-xl leading-6 text-center mt-5 max-w-3/4 lg:text-2xl lg:max-w-2xl">
                    Taekwondo, educação e inclusão social caminhando juntos.
                </h3>

                <button className="text-sm font-semibold mt-6 w-44 py-3 bg-(--color-primary) text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30 lg:w-52 lg:py-4 lg:text-base">
                    ENTRE EM CONTATO
                </button>
            </div>
        </section>
    )
}