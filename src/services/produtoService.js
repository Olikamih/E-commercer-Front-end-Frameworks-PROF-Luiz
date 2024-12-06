import axios from 'axios';

const ProdutoService = {
  getAll: async () => {
    try {
      const response = await axios.get('http://localhost:4444/produtos');  // URL correta para acessar os produtos
      console.log('Produtos recebidos:', response.data);  // Verifica se os produtos estão sendo retornados corretamente
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar produtos:', error);
      throw error;  // Lança o erro para ser tratado no componente HomePage
    }
  }
};

export default ProdutoService;
