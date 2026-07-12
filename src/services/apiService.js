const API_BASE_URL = 'http://127.0.0.1:8000';

export const sendDiseaseData = async (data) => {
  const response = await fetch(`${API_BASE_URL}/registros`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error('Falha ao enviar dados para o servidor.');
  }

  return await response.json();
};