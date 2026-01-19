import Image from "next/image";
import logoDobok from "../../public/logo-dobok.png";
import logoTkdCard from "../../public/logo-tkd-card.png";
import puch from "../../public/logo-punch.png";

export function Cards() {
    return (
        <section className="bg-(--bg-secondary) w-full min-h-screen flex flex-col items-center gap-8 py-16">
            <div>
                <h4 className="font-medium text-sm text-(--color-primary) text-center mb-3">POR QUE PARTICIPAR?</h4>

                <h1 className="text-2xl font-black text-gray-200 text-center">BENEFÍCIOS DO TAEKWONDO</h1>
            </div>

            <div className="flex flex-wrap justify-center items-stretch gap-7 max-w-7xl px-4">
                <article className="w-full md:w-80 bg-(--bg-tertiary) flex flex-col items-center p-6 shadow-inner shadow-blue-500/10 rounded-2xl mb-5">

                    <Image
                        src={logoDobok}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center">Disciplina e respeito</h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty">O Taekwondo ensina autocontrole, regras e respeito ao próximo. Esses valores refletem positivamente na escola e na vida social.</p>
                    </div>

                </article>

                <article className="w-full md:w-80 bg-(--bg-tertiary) flex flex-col items-center p-6 shadow-inner shadow-blue-500/10 rounded-2xl mb-5">

                    <Image
                        src={logoTkdCard}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center">Saúde e desenvolvimento físico</h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty">Melhora força, coordenação, flexibilidade e condicionamento físico. Incentiva hábitos saudáveis e combate o sedentarismo.</p>
                    </div>

                </article>

                <article className="w-full md:w-80 bg-(--bg-tertiary) flex flex-col items-center p-6 shadow-inner shadow-blue-500/10 rounded-2xl mb-5">

                    <Image
                        src={puch}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center">Autoconfiança e foco</h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty">Cada conquista aumenta a autoestima e a confiança do praticante. Ajuda no desenvolvimento do foco, da persistência e da determinação.</p>
                    </div>

                </article>
            </div>

        </section>
    )
}