import { useState, useEffect } from 'react';
import axios from 'axios';
import SaudacaoComponent from '../../components/saudacaoComponent';

const UsuariosPage = ({titulo}) => {
    const [usuarios, setUsuarios] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => setUsuarios(response.data))
        .catch(error => console.error('Erro ao buscar usuários:', error));
    }, []);
    return (
            <div>
                <SaudacaoComponent nome="Luiz" />
                <h3>Usuários - {titulo}</h3>
                <ul>
                    {usuarios.map(usuario => (
                    <li key={usuario.id}>{usuario.name}</li>
                ))}
                </ul>
            </div>
    );
};
export default UsuariosPage;
