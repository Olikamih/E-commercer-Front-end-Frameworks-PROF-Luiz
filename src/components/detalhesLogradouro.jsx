const DetalhesLogradouro = ({logradouro}) => {
    return (
        <div className="card mt-2">
            <div className="card-header">
                Detalhes do Logradouro
            </div>
            <div className="card-body">
            <table className="table">
            <tbody>
                <tr>
                    <th>cep</th>
                    <td>{logradouro.cep}</td>
                </tr>
                <tr>
                    <th>logradouro</th>
                    <td>{logradouro.logradouro}</td>
                </tr>
                <tr>
                    <th>complemento</th>
                    <td>{logradouro.complemento}</td>
                </tr>
                <tr>
                    <th>unidade</th>
                    <td>{logradouro.unidade}</td>
                </tr>
                <tr>
                    <th>localidade</th>
                    <td>{logradouro.localidade}</td>
                </tr>
                <tr>
                    <th>uf</th>
                    <td>{logradouro.uf}</td>
                </tr>
                <tr>
                    <th>estado</th>
                    <td>{logradouro.estado}</td>
                </tr>
                <tr>
                    <th>regiao</th>
                    <td>{logradouro.regiao}</td>
                </tr>
                <tr>
                    <th>ibge</th>
                    <td>{logradouro.ibge}</td>
                </tr>
                <tr>
                    <th>gia</th>
                    <td>{logradouro.gia}</td>
                </tr>
                <tr>
                    <th>ddd</th>
                    <td>{logradouro.ddd}</td>
                </tr>
                <tr>
                    <th>siafi</th>
                    <td>{logradouro.siafi}</td>
                </tr>
            </tbody>
        </table>
            </div>
        </div>
    );
}

export default DetalhesLogradouro;