const API_URL = "http://localhost:3001/api";

export const enviarDadosParaBanco = async (dados) => {
  try {
    const response = await fetch(`${API_URL}/enviar-dados`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dados),
    });

    if (!response.ok) {
      throw new Error("Erro ao enviar dados para o banco de dados");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
