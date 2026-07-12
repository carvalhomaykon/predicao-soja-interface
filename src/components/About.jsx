export default function About() {
    return (
        <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col items-center">
                {/* Cabeçalho da Seção */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-blue-950 mb-4">
                        Inovação Acadêmica & Tecnologia
                    </h2>
                    <div className="h-1.5 w-24 bg-yellow-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Texto Institucional */}
                    <div className="space-y-6">
                        <p className="text-xl font-semibold text-blue-600">
                            Projeto de Pesquisa UFRA
                        </p>
                        <p className="text-lg leading-relaxed text-gray-600">
                            Desenvolvido pela <strong>Universidade Federal Rural da Amazônia (UFRA)</strong>, este sistema é o resultado de uma pesquisa científica dedicada à integração de <strong>Inteligência Artificial</strong> no ecossistema de energia fotovoltaica.
                        </p>
                        <p className="text-lg leading-relaxed text-gray-700">
                            O objetivo central é fornecer uma ferramenta de alta precisão para prever a geração energética, auxiliando na democratização e eficiência do uso de fontes renováveis na região.
                        </p>
                        
                        {/* Selo da Instituição (Opcional - Estilizado) */}
                        <div className="inline-flex items-center gap-3 p-4 bg-blue-50 rounded-2xl border border-blue-100">
                            <span className="text-2xl">🎓</span>
                            <span className="text-sm font-bold text-blue-900 tracking-wider italic">UFRA - Campus Belém</span>
                        </div>
                    </div>

                    {/* Grid de Colaboradores */}
                    <div className="grid sm:grid-cols-2 gap-4">
                        {/* Desenvolvedores */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                Desenvolvedores
                            </h4>
                            <ul className="space-y-2 text-blue-600 font-medium">
                                <li>
                                    <a href="https://portfolio-ye2u.vercel.app/" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-800">
                                        Maykon Carvalho
                                    </a>
                                </li>
                                <li>
                                    <a href="https://gustavoneves19.github.io/" target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-800">
                                        Gustavo Neves
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Orientadores */}
                        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                                <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                                Orientação
                            </h4>
                            <ul className="space-y-2 text-gray-700 font-medium italic">
                                <li>Prof. Dr. Licinius</li>
                                <li>Prof. Dr. Fábio Bezerra</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}