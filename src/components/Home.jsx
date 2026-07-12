import SoyFieldImg from "../assets/soy-field.jpg";

export default function Home() {
    return (
        <div className="relative bg-gradient-to-b from-green-50 to-white pt-20 pb-32 overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Bloco de Conteúdo / Textos */}
                    <div className="lg:w-1/2 text-center lg:text-left z-10">
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wide text-green-700 uppercase bg-green-100 rounded-full">
                            Inteligência Artificial & Agronegócio
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 text-emerald-950 leading-tight">
                            Proteja sua Lavoura <br />
                            <span className="text-green-600">Contra a Ferrugem</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-10 text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Combine dados climáticos e preditivos com nossa IA para antecipar o avanço da ferrugem asiática na sua plantação de soja, otimizando o manejo e reduzindo perdas econômicas.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                            <a 
                                href="#prediction" 
                                className="w-full sm:w-auto bg-amber-500 text-emerald-950 font-bold py-4 px-10 rounded-xl text-lg hover:bg-amber-400 shadow-lg shadow-amber-200 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 text-center"
                            >
                                Analisar Risco
                            </a>
                            <a 
                                href="#about" 
                                className="w-full sm:w-auto bg-white text-green-900 font-semibold py-4 px-10 rounded-xl text-lg border border-gray-200 hover:bg-gray-50 transition-all text-center"
                            >
                                Como Funciona
                            </a>
                        </div>
                    </div>

                    {/* Bloco de Imagem e Elementos Visuais */}
                    <div className="lg:w-1/2 relative flex justify-center">
                        {/* Círculo decorativo de fundo alterado para tons de verde */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-green-200 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                        
                        <div className="relative group">
                            <img 
                                src={SoyFieldImg} 
                                alt="Plantação de soja monitorada" 
                                className="rounded-3xl shadow-2xl transform transition duration-500 group-hover:scale-[1.02] max-w-full h-auto border-8 border-white"
                            />
                            
                            {/* Badge Flutuante */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl hidden md:block">
                                <div className="flex items-center gap-3">
                                    <div className="bg-emerald-100 p-2 rounded-lg">
                                        <div className="w-3 h-3 bg-emerald-500 rounded-full animate-ping"></div>
                                    </div>
                                    <span className="text-sm font-bold text-gray-700">Monitoramento Ativo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}