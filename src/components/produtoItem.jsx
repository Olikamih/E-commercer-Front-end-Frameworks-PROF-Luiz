import React from 'react';

// Exemplo de importação de imagem em src/assets/imgs
import iphone15 from '../../../assets/imgs/iphone15.jpg';
import motorola from '../../../assets/imgs/motorola.jpg';
import tecladosemfio from '../../../assets/imgs/tecladosemfio.jpg';
import gabinetegamer from '../../../assets/imgs/gabinetegamer.jpg';
import fonedeouvidorosa from '../../../assets/imgs/fonedeouvidorosa.jpg';
import mousepad from '../../../assets/imgs/mousepad.jpg';

const ProdutoItem = ({ produto, handleClick }) => {
  // Defina um objeto para mapear o nome da imagem
  const imagens = {
    'iphone15.jpg': iphone15,
    'motorola.jpg': motorola,
    'tecladosemfio.jpg': tecladosemfio,
    'gabinetegamer.jpg': gabinetegamer,
    'fonedeouvidorosa.jpg': fonedeouvidorosa,
    'mousepad.jpg': mousepad
  };

  // Pegue a imagem com base no nome do JSON
  const imagem = imagens[produto.imagem];

  return (
    <div className="card" style={{ width: '18rem' }}>
    <img src={imagem} className="img-fluid" width={200} alt={produto.nome} />
    <div className="card-body">
      <h5 className="card-title">{produto.nome}</h5>
      <p className="card-text">Preço: R${produto.preco.toFixed(2)}</p>
      {/* Botão com estilo inline para rosa */}
      <button
        className="btn btn-primary"
        style={{
          backgroundColor: '#ff1493', /* Cor rosa */
          borderColor: '#ff1493',
        }}
        onClick={handleClick}
      >
        Adicionar ao Carrinho
      </button>
      </div>
    </div>
  );
};

export default ProdutoItem;
