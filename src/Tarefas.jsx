import React, { useState } from 'react';

function Tarefas() {

    const [formData, setFormData] = useState({
        id: '',
        titulo: '',
        data: '',
        descricao: '',
    });

    const [tarefas, setTarefas] = useState([])

    // Guarda os dados submetidos (para mostrar depois do envio)
    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    // Esta função é chamada quando o formulário é submetido
    function handleSubmit(e) {
        e.preventDefault(); // impede o recarregamento da página
        //setDadosSubmetidos(formData); // guarda os dados preenchidos

        const novaTarefa = {
            id: Date.now(), // gera um ID único com base no timestamp
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setTarefas([...tarefas, novaTarefa]);
    }

    function newTarefa() {
        const novaTarefa = {
            id: Date.now(), // gera um ID único com base no timestamp
            titulo: formData.titulo,
            data: formData.data,
            descricao: formData.descricao
        };
        setFormData(novaTarefa);
        setTarefas([...tarefas, novaTarefa]);
        setDadosSubmetidos(null);
    }

    // Limpa o formulário e os dados apresentados
    function limparFormulario() {
        setFormData({ id: '', titulo: '', data: '', descricao: '' });
        setDadosSubmetidos(null);
    }

    function eliminaTarefa(id) {
        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id));
    }

    function eliminaLista() {
        setTarefas([])
    }

    return (
        <div className="mt-4 row">

            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Titulo</label>
                        <input type="text" className="form-control" value={formData.titulo} onChange={(e) =>

                            setFormData({ ...formData, titulo: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" className="form-control" value={formData.data} onChange={(e) =>

                            setFormData({ ...formData, data: e.target.value })} required />
                    </div>
                    <div className="form-group">
                        <label>Descrição</label>
                        <input type="text" className="form-control" value={formData.descricao} onChange={(e) =>

                            setFormData({ ...formData, descricao: e.target.value })} />
                    </div>

                    {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>

                    <button type="button" className="btn btn-outline-secondary mr-2"

                        onClick={limparFormulario}>Limpar</button>

                    <button type="button" className="btn btn-outline-secondary"

                        onClick={newTarefa}>Nova Tarefa</button>
                </form>
            </div>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Titulo:</strong> {dadosSubmetidos.titulo}</p>
                            <p><strong>Data:</strong> {dadosSubmetidos.data}</p>
                            <p><strong>Descrição:</strong> {dadosSubmetidos.descricao}</p>
                        </div>
                    </div>
                )}

                <ul className="list-group mt-4">
                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className="list-group-item">
                            <p><strong>Titulo:</strong> {tarefa.titulo}</p>
                            <p><strong>Data:</strong> {tarefa.data}</p>
                            <p><strong>Descrição:</strong> {tarefa.descricao}</p>
                            <button type="button" className="btn btn-outline-danger mt-2" onClick={() => eliminaTarefa(tarefa.id)}>
                                Eliminar
                            </button>
                        </li>
                        
                    ))}
                </ul>
                {tarefas.length > 0 && (
                    <button type="button" className="btn btn-outline-secondary mt-2" onClick={() => eliminaLista()}>
                        Limpar Lista
                    </button>
                )}
            </div>

        </div>
    );
}
export default Tarefas;