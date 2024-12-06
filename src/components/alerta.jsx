const Alerta = ({tipo, mensagem}) => {
    const estilo = `alert alert-${tipo} alert-dismissible fade show mb-2 mt-2`;
    return (
            <div className={estilo} role="alert">
                {mensagem}
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
    );
}

export default Alerta;