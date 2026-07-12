import { useState } from 'react';
import { sendDiseaseData } from '../../services/apiService';

export default function DiseaseForm() {
  const [formData, setFormData] = useState({
    latitude: '',
    longitude: '',
    data: new Date().toISOString().split('T')[0],
  });
  const [loading, setLoading] = useState(false);

  // Função para lidar com a digitação nos inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await sendDiseaseData(formData);
      alert('Dados enviados com sucesso!');
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setFormData((prev) => ({
            ...prev,
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
          }));
        },
        (error) => alert("Erro ao obter localização: " + error.message)
      );
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-xl border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Registrar Ocorrência</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Latitude</label>
            <input 
              name="latitude" 
              value={formData.latitude} 
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required 
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Longitude</label>
            <input 
              name="longitude" 
              value={formData.longitude} 
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
              required 
            />
          </div>
        </div>

        <button 
          type="button" 
          onClick={handleGetLocation}
          className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded-md transition duration-200 border border-gray-300"
        >
          📍 Capturar Localização Atual
        </button>

        <div>
          <label className="block text-sm font-medium text-gray-700">Data</label>
          <input 
            type="date" 
            name="date" 
            value={formData.data} 
            onChange={handleChange}
            className="mt-1 w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 outline-none"
            required 
          />
        </div>

        <button 
          type="submit"
          disabled={loading}
          className={`w-full font-bold py-2 px-4 rounded-md transition duration-200 mt-4 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {loading ? 'Enviando...' : 'Enviar Registro'}
        </button>
      </form>
    </div>
  );
}