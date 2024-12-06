import axios from "axios";
import { useState } from "react";
import Alerta from "../../components/alerta";
import { Link } from "react-router-dom";
import Loading from "../../components/loading";
import DetalhesLogradouro from "../../components/detalhesLogradouro";
import MenuComponent from "../../components/menu";

const BuscaCepPage = () => {
    const [cep, setCep] = useState(null);
    const [logradouro, setLogradouro] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);

    const buscaLogradouro = async () => {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            setLogradouro(response.data);
            console.log(response.data);
            setTipo("success");
            setMensagem("Busca efetuada com sucesso");
            setIsLoading(false);
        } catch (error) {
            setTipo("danger");
            setMensagem("Ocorreu um erro");
            setIsLoading(false);
        }
    };

    return (
        <>
            <MenuComponent />
            <div className="container">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Busca CEP</li>
                </ol>
            </nav>
            { mensagem !== null && <Alerta tipo={tipo} mensagem={mensagem} />}
            <div className="input-group mb-3 mt-3">
                <input type="text" className="form-control" placeholder="Digite um CEP válido" onChange={(e) => setCep(e.target.value)} />
                <button className="btn btn-success" type="button" id="button-addon2" onClick={buscaLogradouro}><i className="bi bi-search"></i> Buscar</button>
            </div>
            {isLoading && <Loading />}
            {logradouro !== null && <DetalhesLogradouro logradouro={logradouro} />}
        </div>
        </>
    );
}

export default BuscaCepPage;