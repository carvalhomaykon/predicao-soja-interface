const API_BASE_URL = 'https://culture-rip-massage-introductory.trycloudflare.com';

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