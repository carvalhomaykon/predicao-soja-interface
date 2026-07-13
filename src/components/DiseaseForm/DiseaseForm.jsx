import { useState } from 'react';
import { sendDiseaseData } from '../../services/apiService';

export default function DiseaseForm() {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    data: new Date().toISOString().split('T')[0],
  });
  
  const [loading, setLoading] = useState(false);
  const [locationLoading, setLocationLoading] = useState(false);
  
  // Estados para o Modal e os Dados da API
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [apiResult, setApiResult] = useState(null);

  // Helper para definir as cores baseadas no nível de risco
  const getRiskStyles = (risk) => {
    switch (risk?.toLowerCase()) {
      case 'alto':
        return { text: 'text-red-600', bg: 'bg-red-50', border: 'border-red-200', colorHex: 'ff0000' };
      case 'médio':
      case 'medio':
        return { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', colorHex: 'f59e0b' };
      case 'baixo':
      default:
        return { text: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200', colorHex: '10b981' };
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Simulando que o sendDiseaseData retorne o JSON que você especificou
      const response = await sendDiseaseData(formData);
      setApiResult(response);
      setIsModalOpen(true);
    } catch (error) {
      alert(error.message || 'Erro ao processar requisição');
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      setLocationLoading(true);
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }));
          setLocationLoading(false);
        },
        (error) => {
          alert("Erro ao obter localização: " + error.message);
          setLocationLoading(false);
        }
      );
    } else {
      alert("Geolocalização não é suportada pelo seu navegador.");
    }
  };

  const riskStyle = getRiskStyles(apiResult?.predicao?.nivel_risco);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl border border-gray-100 mb-10">
      <h2 className="text-2xl font-bold mb-6 text-emerald-950">Análise de Campo</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input 
              name="latitude" 
              value={formData.latitude} 
              onChange={handleChange}
              placeholder="Ex: -1.6681"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none transition"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input 
              name="longitude" 
              value={formData.longitude} 
              onChange={handleChange}
              placeholder="Ex: -48.8197"
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none transition"
              required 
            />
          </div>
        </div>

        <button 
          type="button" 
          onClick={handleGetLocation}
          disabled={locationLoading}
          className="w-full bg-green-50 hover:bg-green-100 text-green-700 font-semibold py-2.5 px-4 rounded-xl transition duration-200 border border-green-200 flex items-center justify-center gap-2 disabled:opacity-70"
        >
          {locationLoading ? (
            <>
              <span className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin"></span>
              Obtendo dados de localização...
            </>
          ) : (
            <>📍 Capturar Localização Atual</>
          )}
        </button>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data da Coleta</label>
          <input 
            type="date" 
            name="data" 
            value={formData.data} 
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 outline-none transition"
            required 
          />
        </div>

        <button 
          type="submit"
          disabled={loading || locationLoading}
          className={`w-full font-bold py-3 px-4 rounded-xl transition duration-200 mt-4 shadow-md ${
            loading ? 'bg-gray-400 cursor-not-allowed text-white' : 'bg-amber-500 hover:bg-amber-400 text-emerald-950 shadow-amber-100'
          }`}
        >
          {loading ? 'Processando Predição...' : 'Analisar Risco de Ferrugem'}
        </button>
      </form>

      {/* --- MODAL DE RESULTADOS --- */}
      {isModalOpen && apiResult && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl transition-all border border-gray-100">
            
            {/* Header Modal */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Resultado da Análise</h3>
                <p className="text-sm text-gray-500">Coordenadas: {apiResult.localizacao.lat.toFixed(4)}, {apiResult.localizacao.lon.toFixed(4)}</p>
              </div>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 font-bold text-xl p-1"
              >
                ✕
              </button>
            </div>

            {/* Painel de Risco */}
            <div className={`p-4 rounded-2xl border ${riskStyle.bg} ${riskStyle.border} mb-6`}>
              <div className="flex justify-between items-center">
                <span className="font-semibold text-gray-700">Risco Estimado:</span>
                <span className={`text-xl font-black uppercase ${riskStyle.text}`}>
                  {apiResult.predicao.nivel_risco}
                </span>
              </div>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-600">
                <span>Probabilidade da doença:</span>
                <span className="font-bold">{(apiResult.predicao.probabilidade_ferrugem * 100).toFixed(2)}%</span>
              </div>
            </div>

            {/* Dados de Clima (30 dias) */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase text-gray-400 tracking-wider mb-3">Média Climática (Últimos 30 dias)</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500">Chuva Acumulada</span>
                  <span className="text-base font-bold text-gray-800">{apiResult.clima_medio_30_dias.chuva_acumulada_mm} mm</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500">Umidade Relativa</span>
                  <span className="text-base font-bold text-gray-800">{apiResult.clima_medio_30_dias.umidade_relativa_media}%</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500">Temp. Máxima</span>
                  <span className="text-base font-bold text-gray-800">{apiResult.clima_medio_30_dias.temperatura_max_media}°C</span>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <span className="block text-xs text-gray-500">Temp. Mínima</span>
                  <span className="text-base font-bold text-gray-800">{apiResult.clima_medio_30_dias.temperatura_min_media}°C</span>
                </div>
              </div>
            </div>

            {/* Componente de Mapa Embutido */}
            <div className="mb-6">
              <h4 className="font-bold text-sm uppercase text-gray-400 tracking-wider mb-3">Localização da Plantação</h4>
              <div className={`rounded-2xl overflow-hidden border-4 ${riskStyle.border} h-48 bg-gray-100 relative`}>
                <iframe
                  title="Mapa de Risco"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  scrolling="no"
                  src={`https://maps.google.com/maps?q=${apiResult.localizacao.lat},${apiResult.localizacao.lon}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                ></iframe>
              </div>
            </div>

            {/* Disclaimer Acadêmico */}
            <p className="text-xs text-amber-700 bg-amber-50 p-3 rounded-xl border border-amber-100 italic">
              ⚠️ {apiResult.predicao.aviso}
            </p>

            {/* Botão Fechar */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="w-full mt-6 bg-gray-900 text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition"
            >
              Fechar Relatório
            </button>

          </div>
        </div>
      )}
    </div>
  );
}