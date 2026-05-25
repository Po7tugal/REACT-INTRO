import React, { useState } from 'react';

function Notas() {

    const [formData, setFormData] = useState({
        nomeAluno: '',
        disciplina: '',
        notaTestes: '',
        testesPC: '',
        notaTrabalhos: '',
        trabalhosPC: '',
        notaAtitudes: '',
        atitudes: '',
        atitudesPC: '',
    })

    const [notas, setNotas] = useState([])

    const [dadosSubmetidos, setDadosSubmetidos] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        const novaNota = {
            id: Date.now(), // gera um ID único com base no timestamp
            nomeAluno: formData.nomeAluno,
            disciplina: formData.disciplina,
            notaTestes: formData.notaTestes,
            testesPC: formData.testesPC,
            notaTrabalhos: formData.notaTrabalhos,
            trabalhosPC: formData.trabalhosPC,
            notaAtitudes: formData.notaAtitudes,
            atitudes: formData.atitudes,
        };
        setTarefas([...notas, novaNota]);
    }

    function novaNota() {
        const novaNota = {
            id: Date.now(), // gera um ID único com base no timestamp
            nomeAluno: formData.nomeAluno,
            disciplina: formData.disciplina,
            notaTestes: formData.notaTestes,
            testesPC: formData.testesPC,
            notaTrabalhos: formData.notaTrabalhos,
            trabalhosPC: formData.trabalhosPC,
            notaAtitudes: formData.notaAtitudes,
            atitudes: formData.atitudes,
        };
        setFormData(novaNota);
        setNotas([...notas, novaNota]);
        setDadosSubmetidos(null);
    }

    function limparFormulario() {
        setFormData({ id: '', nomeAluno: '', disciplina: '', notaTestes: '', testesPC: '', testesPC: '', notaTrabalhos: '', trabalhosPC: '', notaAtitudes: '', atitudes: '' });
        setDadosSubmetidos(null);
    }

    function eliminaNota(id) {
        setNotas(notas.filter((notas) => notas.id !== id));
    }

    function eliminaLista() {
        setNotas([])
    }

    return (
        
        <div className="mt-4 row">

            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>nomeAluno</label>
                        <input type="text" className="form-control" value={formData.nomeAluno} onChange={(e) =>

                            setFormData({ ...formData, nomeAluno: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-4">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Disciplina</label>
                        <input type="text" className="form-control" value={formData.disciplina} onChange={(e) =>

                            setFormData({ ...formData, disciplina: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nota dos testes</label>
                        <input type="text" className="form-control" value={formData.notaTestes} onChange={(e) =>

                            setFormData({ ...formData, notaTestes: e.target.value })} required />

                    </div>
                </form>
            </div>

            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Testes PC</label>
                        <input type="text" className="form-control" value={formData.testesPC} onChange={(e) =>

                            setFormData({ ...formData, testesPC: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nota dos trabalhos</label>
                        <input type="text" className="form-control" value={formData.notaTrabalhos} onChange={(e) =>

                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Trabalhos PC</label>
                        <input type="text" className="form-control" value={formData.trabalhosPC} onChange={(e) =>

                            setFormData({ ...formData, trabalhosPC: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nota das atitudes</label>
                        <input type="text" className="form-control" value={formData.notaAtitudes} onChange={(e) =>

                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>atitudes PC</label>
                        <input type="text" className="form-control" value={formData.atitudesPC} onChange={(e) =>

                            setFormData({ ...formData, atitudesPC: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-12">
                {/* Botões de ação */}
                    <button className="btn btn-success mr-2">Enviar</button>
            </div>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome do Aluno:</strong> {dadosSubmetidos.nomeAluno}</p>
                            <p><strong>nota dos Testes:</strong> {dadosSubmetidos.notaTeste}</p>
                            <p><strong>(%) Testes:</strong> {dadosSubmetidos.testesPC}</p>
                            <p><strong>Nota dos Trabalhos:</strong> {dadosSubmetidos.notaTrabalhos}</p>
                            <p><strong>(%) Trabalhos:</strong> {dadosSubmetidos.trabalhosPC}</p>
                            <p><strong>Nota das Atitudes:</strong> {dadosSubmetidos.notaAtitudes}</p>
                            <p><strong>(%) Atitudes:</strong> {dadosSubmetidos.atitudesPC}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
export default Notas;