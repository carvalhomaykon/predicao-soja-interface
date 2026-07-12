export default function Footer() {
    return (
        <footer id="contact" className="bg-blue-950 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-blue-900 pb-12">
                    
                    {/* Coluna 1: Logo/Nome */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">
                            SolarPredict <span className="text-yellow-400">Pro</span>
                        </h3>
                        <p className="text-blue-200 text-sm leading-relaxed">
                            Transformando dados climáticos em inteligência energética através da pesquisa acadêmica da UFRA.
                        </p>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Navegação</h4>
                        <ul className="space-y-2 text-blue-300 text-sm">
                            <li><a href="#" className="hover:text-yellow-400 transition">Início</a></li>
                            <li><a href="#about" className="hover:text-yellow-400 transition">Sobre o Projeto</a></li>
                            <li><a href="#prediction" className="hover:text-yellow-400 transition">Calcular Predição</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato/Suporte */}
                    <div>
                        <h4 className="font-semibold text-lg mb-4 text-white">Contato</h4>
                        <div className="space-y-3">
                            <a 
                                href="mailto:maykon.carvalho@discente.ufra.edu.br" 
                                className="flex items-center gap-2 text-blue-300 hover:text-yellow-400 transition text-sm"
                            >
                                <span className="text-lg">✉</span> maykon.carvalho@discente.ufra.edu.br
                            </a>
                            <p className="text-xs text-blue-400 uppercase tracking-widest font-bold">
                                UFRA - Campus Belém
                            </p>
                        </div>
                    </div>
                </div>

                {/* Linha Inferior: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-400">
                    <p>&copy; {new Date().getFullYear()} SolarPredict Pro. Todos os direitos reservados.</p>
                    <div className="flex gap-6 italic">
                        <span>Tecnologia & Sustentabilidade</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}