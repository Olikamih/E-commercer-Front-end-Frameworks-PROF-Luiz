import React, { useState, useEffect } from "react";  // Importando useState e useEffect
import axios from "axios";  // Importando axios
import Alerta from "../../components/alerta";  // Importando o componente Alerta
import Loading from "../../components/loading";  // Importando o componente Loading
import { Link } from "react-router-dom";  // Importando Link para navegação

const CadClientePage = () => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    // useEffect para verificar o carregamento da página
    useEffect(() => {
        console.log("Página de cadastro carregada");
    }, []);

    // Função para cadastrar o cliente
    const cadastrarCliente = async () => {
        try {
            setIsLoading(true);
            const dataCliente = { nome, email, senha };
            const response = await axios.post(`http://localhost:444/clientes`, dataCliente);

            console.log("Resposta da requisição:", response);  // Verifique a resposta da API

            if (response && response.data) {
                setMensagem("Cliente cadastrado com sucesso");
                setTipo("success");
            } else {
                setMensagem("Erro ao cadastrar cliente. Dados não retornados.");
                setTipo("danger");
            }
        } catch (error) {
            console.error("Erro no cadastro do cliente:", error);
            setMensagem("Erro no cadastro do cliente");
            setTipo("danger");
        } finally {
            setIsLoading(false);  // Sempre executar isso para parar o loading
        }
    };

    const handleCadCliente = async (event) => {
        event.preventDefault();
        await cadastrarCliente();
    };

    return (
        <div className="container d-flex justify-content-center align-items-center min-vh-100">
            <div className="w-100 p-4" style={{
                border: "2px solid #ff1493",  // Borda rosa clara
                borderRadius: "10px",         // Bordas arredondadas
                backgroundColor: "#fff"       // Fundo branco
            }}>
                <div className="text-center mb-4">
                    <h3>Cadastro de Cliente</h3>
                </div>

                {mensagem !== null && <Alerta tipo={tipo} mensagem={mensagem} />}
                {isLoading && <Loading />}

                <form onSubmit={handleCadCliente}>
                    <div className="mb-3">
                        <label htmlFor="nome" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">E-mail</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha" className="form-label">Senha</label>
                        <input
                            type="password"
                            className="form-control"
                            id="senha"
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                        />
                    </div>

                    <button 
                        type="submit" 
                        className="btn"
                        style={{
                            backgroundColor: "#ff1493",  // Cor rosa
                            borderColor: "#ff1493",      // Borda rosa
                            color: "#fff",               // Texto branco
                        }}
                        onMouseEnter={(e) => e.target.style.backgroundColor = "#ff007f"}  // Fica vermelho ao passar o mouse
                        onMouseLeave={(e) => e.target.style.backgroundColor = "#ff1493"}  // Volta para o rosa ao sair
                        onClick={(e) => e.target.style.backgroundColor = "#28a745"}  // Fica verde ao clicar
                    >
                        Cadastrar
                    </button>
                </form>

                <div className="mt-3 text-center">
                    <Link to="/" className="btn btn-outline-primary w-100">Voltar para o Menu Principal</Link>
                </div>
            </div>
        </div>
    );
};

export default CadClientePage;
