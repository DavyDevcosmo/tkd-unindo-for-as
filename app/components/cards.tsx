import Image from "next/image";
import logoDobok from "../../public/logo-dobok.png";
import logoTkdCard from "../../public/logo-tkd-card.png";
import puch from "../../public/logo-punch.png";

export function Cards() {
    return (
        <section className="bg-(--bg-secondary) w-full min-h-screen flex flex-col items-center gap-8 py-16 lg:py-24">
            <div className="max-w-3xl px-4">
                <h4 className="font-medium text-sm text-(--color-primary) text-center mb-3 lg:text-base">
                    POR QUE PARTICIPAR?
                </h4>

                <h1 className="text-2xl font-black text-gray-200 text-center lg:text-4xl lg:leading-tight">
                    BENEFÍCIOS DO TAEKWONDO
                </h1>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-stretch gap-7 max-w-7xl px-4 lg:gap-8 lg:px-8">

                {/* Card 1 */}
                <article className="w-full lg:w-1/3 bg-(--bg-tertiary) flex flex-col items-center p-6 lg:p-8 shadow-inner shadow-blue-500/10 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <Image
                        src={logoDobok}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4 lg:mb-6"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center lg:text-2xl lg:mb-5">
                            Disciplina e respeito
                        </h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty lg:text-lg lg:leading-8">
                            O Taekwondo ensina autocontrole, regras e respeito ao próximo. Esses valores refletem positivamente na escola e na vida social.
                        </p>
                    </div>
                </article>

                {/* Card 2 */}
                <article className="w-full lg:w-1/3 bg-(--bg-tertiary) flex flex-col items-center p-6 lg:p-8 shadow-inner shadow-blue-500/10 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <Image
                        src={logoTkdCard}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4 lg:mb-6"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center lg:text-2xl lg:mb-5">
                            Saúde e desenvolvimento físico
                        </h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty lg:text-lg lg:leading-8">
                            Melhora força, coordenação, flexibilidade e condicionamento físico. Incentiva hábitos saudáveis e combate o sedentarismo.
                        </p>
                    </div>
                </article>

                {/* Card 3 */}
                <article className="w-full lg:w-1/3 bg-(--bg-tertiary) flex flex-col items-center p-6 lg:p-8 shadow-inner shadow-blue-500/10 rounded-2xl hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                    <Image
                        src={puch}
                        alt="Logo do Taekwondo"
                        className="object-cover object-center rounded-2xl shadow-lg shadow-blue-500/10 mb-4 lg:mb-6"
                        width={44}
                        height={44}
                        priority
                    />

                    <div className="flex-1 flex flex-col">
                        <h4 className="text-xl font-bold text-gray-200 mb-4 text-center lg:text-2xl lg:mb-5">
                            Autoconfiança e foco
                        </h4>

                        <p className="text-(--text-secondary) text-base leading-7 px-2 text-left text-pretty lg:text-lg lg:leading-8">
                            Cada conquista aumenta a autoestima e a confiança do praticante. Ajuda no desenvolvimento do foco, da persistência e da determinação.
                        </p>
                    </div>
                </article>
            </div>

        </section>
    )
}