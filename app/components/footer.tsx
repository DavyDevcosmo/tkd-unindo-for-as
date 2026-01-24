import Image from "next/image";
import logotkd from "../../public/logo-taekwondo-unindo.png";
import whatsapp from "../../public/whatsapp.png";
import instagram from "../../public/instagram.png";

export function Footer() {
    return (
        <section className="bg-(--bg-primary)">

            {/* Horários */}
            <div className="px-4 lg:px-16 max-w-6xl mx-auto">
                <h4 className="font-medium text-sm lg:text-base text-(--color-primary) text-center mb-3 pt-11 lg:pt-16">
                    HORÁRIOS
                </h4>

                <h1 className="text-2xl lg:text-4xl font-black text-gray-200 text-center">
                    PROGRAMAÇÃO DE TREINOS
                </h1>

                <div className="flex justify-between items-center mt-6 mx-0 lg:mx-0 h-14 lg:h-20 px-4 lg:px-8 text-center bg-[#137FEC]/20 shadow-inner shadow-white/10 rounded-md">
                    <h4 className="text-white font-extrabold text-base lg:text-xl">
                        Terça e sexta
                    </h4>
                    <h4 className="text-base lg:text-xl font-semibold text-(--color-primary)">
                        18:00 às 19:10
                    </h4>
                </div>
            </div>

            {/* Contato */}
            <div className="px-4 lg:px-16 max-w-6xl mx-auto">
                <div
                    id="contato"
                    className="bg-(--color-primary) rounded-xl mt-20 lg:mt-28 px-6 lg:px-10 py-10 lg:py-14 flex flex-col justify-center gap-4"
                >
                    <h1 className="text-gray-200 font-semibold text-2xl lg:text-4xl leading-tight">
                        Ficou com alguma <br /> dúvida?
                    </h1>

                    <p className="text-gray-200 text-base lg:text-lg max-w-xl">
                        Chame a gente no WhatsApp e fale diretamente com o professor.
                    </p>

                    <button className="mt-4 w-48 lg:w-60 py-3 lg:py-4 bg-white text-(--color-primary) font-semibold rounded-xl hover:bg-blue-700 hover:text-white transition shadow-lg shadow-blue-500/30">
                        FALAR NO WHATSAPP
                    </button>
                </div>
            </div>

            {/* Mapa */}
            <div className="px-4 lg:px-16 max-w-6xl mx-auto mt-16 lg:mt-24 mb-20">
                <iframe
                    className="w-full h-56 lg:h-96 rounded-xl shadow-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.6740167112731!2d-38.053136572270276!3d-4.262150115231908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8f4a52fdafa45%3A0xb60051aa97942320!2sR.%20Moreira%20Rocha%2C%20314%20-%20Sucatinga%2C%20Beberibe%20-%20CE%2C%2062842-000!5e0!3m2!1spt-BR!2sbr!4v1768810991741!5m2!1spt-BR!2sbr"
                />
            </div>

            {/* Footer */}
            <footer className="bg-(--bg-tertiary)">
                <div className="max-w-7xl mx-auto px-6 lg:px-16 py-14 border-y border-gray-700 flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <Image src={logotkd} alt="Logo do Taekwondo" width={48} height={48} />
                        <h1 className="text-white font-bebas text-lg lg:text-2xl tracking-wider">
                            TAEKWONDO UNINDO FORÇAS
                        </h1>
                    </div>

                    {/* Navegação */}
                    <nav>
                        <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-gray-400 text-center lg:text-left">
                            <li><a href="#inicio" className="hover:text-blue-400 transition">Início</a></li>
                            <li><a href="#projeto" className="hover:text-blue-400 transition">Projeto</a></li>
                            <li><a href="#contato" className="hover:text-blue-400 transition">Contato</a></li>
                        </ul>
                    </nav>

                    {/* Redes Sociais */}
                    <div className="flex gap-6">
                        <a
                            href="https://wa.me/5585999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
                        </a>

                        <a
                            href="https://www.instagram.com/tkdsucatinga"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image src={instagram} alt="Instagram" width={30} height={30} />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="bg-(--bg-primary) py-6 text-center px-4">
                    <p className="text-gray-500 text-sm lg:text-base">
                        © {new Date().getFullYear()} Todos os direitos reservados —{" "}
                        <span className="text-white font-medium">Taekwondo Unindo Forças</span>
                    </p>
                    <p className="text-gray-400 text-sm lg:text-base">
                        Desenvolvido por <span className="text-[#0ac481] font-medium">DavyCosmo</span>
                    </p>
                </div>
            </footer>
        </section>
    );
}
