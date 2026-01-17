import Image from "next/image";
import bgCta from "../../public/teste33.png"

export function CallToAction() {
    return (
        <section className="relative w-full h-[83dvh] overflow-hidden bg-black/70">

            <Image
                src={bgCta}
                alt="Logo do Taekwondo"
                className="object-cover object-center "
                fill
                priority
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">

                <h1 className="text-4xl leading-11 font-bold text-white text-center  max-w-sm">
                    UM PROJETO QUE MUDA <span className="text-[#62A8ED]"> HISTÓRIAS </span>
                </h1>

                <h3 className="text-(--text-secondary) text-xl leading-6 text-center mt-5
                 max-w-3/4">
                    Taekwondo, educação e inclusão social caminhando juntos.
                </h3>

                <button className="text-sm font-semibold mt-6 w-44 py-3 bg-(--color-primary) text-white  rounded-xl hover:bg-blue-700 transition-colors">
                    ENTRE EM CONTATO
                </button>
            </div>
        </section>
    )

}