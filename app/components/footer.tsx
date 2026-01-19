import Image from "next/image";
import logotkd from "../../public/logo-taekwondo-unindo.png";
import whatsapp from "../../public/whatsapp.png";
import instagram from "../../public/instagram.png";

export function Footer() {
    return (
        <section className="bg-(--bg-primary) h-auto">
            <div>
                <h4 className="font-medium text-sm text-(--color-primary) text-center mb-3 pt-11">HORÁRIOS</h4>

                <h1 className="text-2xl font-black text-gray-200 text-center">PROGRAMAÇÃO DE TREINOS</h1>


                <div className="flex justify-between items-center h-14 mx-5 mt-6 text-center bg-[#137FEC]/20 shadow-inner shadow-white/10 rounded-sm px-4">

                    <h4 className="text-white font-extrabold text-base">
                        Terça e sexta
                    </h4>
                    <h4 className="text-base font-semibold text-(--color-primary)">18:00 as 19:10</h4>
                </div>
            </div>


            <div className="h-60 mx-5 bg-(--color-primary) rounded-lg mt-20 text-left pl-4 mb-24">

                <h1 className="text-gray-200 font-semibold text-2xl pt-6">Ficou com alguma <br />dúvida?
                </h1>

                <p className="text-base text-gray-200  pt-3">Chame a gente no Whatsapp e fale diretamente com o professor.</p>

                <button className="text-sm font-semibold mt-5 w-44 py-3 bg-white text-(--color-primary)  rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                    FALAR NO WHATSAPP
                </button>

            </div>

            <div className="mb-14 mx-4">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248.6740167112731!2d-38.053136572270276!3d-4.262150115231908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7b8f4a52fdafa45%3A0xb60051aa97942320!2sR.%20Moreira%20Rocha%2C%20314%20-%20Sucatinga%2C%20Beberibe%20-%20CE%2C%2062842-000!5e0!3m2!1spt-BR!2sbr!4v1768810991741!5m2!1spt-BR!2sbr"

                    className="w-full h-56 rounded-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>

            <footer className="flex flex-col h-80 justify-center items-center bg-(--bg-tertiary) pt-16">
                <div className="gap-3 flex flex-col justify-center items-center border-t border-b border-gray-700 w-full">
                    <div className="flex items-center gap-3 mt-9">
                        <Image
                            src={logotkd}
                            alt="Logo do Taekwondo"
                            width={48}
                            height={48}
                        />
                        <h1 className="text-white font-bebas text-lg tracking-wider">TAEKWONDO UNINDO FORÇAS</h1>
                    </div>

                    <ul className="mt-7 flex gap-4 flex-col text-gray-400 text-">
                        <li><a href="" className="hover:text-blue-400 text-base">Inicio</a></li>
                        <li><a href="" className="hover:text-blue-400">Projeto</a></li>
                        <li><a href="" className="hover:text-blue-400">Contato</a></li>
                    </ul>


                    <div className="flex gap-12 mt-8 mb-9">
                        <a
                            href="https://wa.me/5585999999999"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image
                                src={whatsapp}
                                alt="WhatsApp"
                                width={30}
                                height={30}
                            />
                        </a>
                        <a
                            href="https://instagram.com/seu_usuario"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:scale-110 transition-transform"
                        >
                            <Image
                                src={instagram}
                                alt="Instagram"
                                width={30}
                                height={30}
                            />
                        </a>
                    </div>

                </div>

                <div className="w-full bg-(--bg-primary) py-6 flex items-center justify-center flex-col gap-2">
                    <p className="text-gray-500 text-sm text-center">
                        &copy; {new Date().getFullYear()} Todos os Direitos Reservados a <span className="text-white font-medium">Taekwondo Unindo Forças</span>
                    </p>
                    <p className="text-gray-400 text-sm mt-2 text-center">
                        Desenvolvido por <span className="text-[#0ac481] font-medium">DavyCosmo</span>
                    </p>
                </div>
            </footer>

        </section>

    )
}