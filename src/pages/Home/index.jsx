import { useContext, useEffect, useState } from 'react';
import MenuComponent from '../../components/menu';
import { Link } from 'react-router-dom';
import ProdutoItem from './components/produtoItem';
import ProdutoService from '../../services/produtoService';
import { CarrinhoContext } from '../../context/carrinhoContext';

const HomePage = () => {
    const { carrinho, addCarrinho} = useContext(CarrinhoContext);

    const [produtos, setProdutos] = useState([]);
    
    const getProdutos = async () => {
      const produtosTemp = await ProdutoService.getAll();  
      console.log('Produtos na HomePage:', produtosTemp);  // Log para ver o que está vindo da API
      setProdutos(produtosTemp);
    };

    useEffect(() => {getProdutos()}, []);

    //console.log(produtos);
    console.log('Carrinho: ', carrinho);
    return (<>
              <MenuComponent />
              <div className='container'>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/"><i className='bi bi-house'></i> Início</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Lista de Produtos</li>
                  </ol>
                </nav>
                {produtos.length === 0 ? (
                  <h2>Nenhum produto foi encontrado</h2>
                ) : (
                  <div className='row mt-4'>
                  { produtos.map((produto) => (
                    <div key={produto.id} className='col-4'>
                      <ProdutoItem produto={produto} handleClick={()=>addCarrinho(produto)} />
                    </div>
                  ))}
                  </div>
                )}
              </div>
            </>);
};

export default HomePage;