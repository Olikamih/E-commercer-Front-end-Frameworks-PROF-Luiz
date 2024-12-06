import { Link } from "react-router-dom";

const MenuComponent = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#ff1493' }}> {/* Cor rosa com estilo inline */}
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><i className="bi bi-house"></i></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/buscacep">Busca CEP</Link>
                    </li>
                    <li className="nav-item">
                       <Link className="nav-link" to="/cliente/cad">Cadastro</Link> 
                      </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/carrinho">Carrinho</Link>
                    </li>
                </ul>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                </div>
            </div>
            </nav>
    );
}

export default MenuComponent;