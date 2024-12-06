import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home';
import UsuariosPage from './pages/Usuarios';
import BuscaCepPage from './pages/BuscaCep';
import CadClientePage from './pages/Cliente/cad';
import CarrinhoPage from './pages/Carrinho';
import { CarrinhoProvider } from './context/carrinhoContext';

const Sobre = () => <h1>Sobre Nós</h1>;

const App = () => {
    return (
        <CarrinhoProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/usuarios" element={<UsuariosPage titulo="Lista de Cliente" />} />
                    <Route path="/sobre" element={<Sobre />} />
                    <Route path="/buscacep" element={<BuscaCepPage />} />
                    <Route path="/cliente/cad" element={<CadClientePage />} />
                    <Route path="/carrinho" element={<CarrinhoPage />} />
                </Routes>
            </BrowserRouter>
        </CarrinhoProvider>
    );
};

export default App;
