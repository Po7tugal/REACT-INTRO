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
            id: Date.now(),
            nomeAluno: formData.nomeAluno,
            disciplina: formData.disciplina,
            notaTestes: formData.notaTestes,
            testesPC: formData.testesPC,
            notaTrabalhos: formData.notaTrabalhos,
            trabalhosPC: formData.trabalhosPC,
            notaAtitudes: formData.notaAtitudes,
            atitudesPC: formData.atitudesPC,
        };

        setNotas([...notas, novaNota]);

        // MOSTRAR DADOS NO CARD
        setDadosSubmetidos(novaNota);
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
        setFormData({ id: '', nomeAluno: '', disciplina: '', notaTestes: '', testesPC: '', testesPC: '', notaTrabalhos: '', trabalhosPC: '', notaAtitudes: '', atitudes: '', atitudesPC: '' });
        setDadosSubmetidos(null);
    }

    function eliminaNota(id) {
        setNotas(notas.filter((notas) => notas.id !== id));
    }

    function eliminaLista() {
        setNotas([])
    }

    function calcularNotaFinal(dados) {
        return (
            (Number(dados.notaTestes) * Number(dados.testesPC) / 100) +
            (Number(dados.notaTrabalhos) * Number(dados.trabalhosPC) / 100) +
            (Number(dados.notaAtitudes) * Number(dados.atitudesPC) / 100)
        ).toFixed(1);
    }

    function aprovacao(dados) {
        const notaFinal = calcularNotaFinal(dados);

        if (notaFinal >= 9.5) {
            return "Aprovado";
        } else {
            return "Reprovado";
        }
    }

    return (

        <div className="mt-4 row">

            <div className="col-8">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nome Aluno</label>
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
                        <input type="number" min="0" max="20" className="form-control" value={formData.notaTestes} onChange={(e) =>

                            setFormData({ ...formData, notaTestes: e.target.value })} required />

                    </div>
                </form>
            </div>

            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Testes (%)</label>
                        <input type="number" min="0" max="100" className="form-control" value={formData.testesPC} onChange={(e) =>

                            setFormData({ ...formData, testesPC: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-6">
            </div>

            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nota dos trabalhos</label>
                        <input type="number" min="0" max="20" className="form-control" value={formData.notaTrabalhos} onChange={(e) =>

                            setFormData({ ...formData, notaTrabalhos: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Trabalhos (%)</label>
                        <input type="number" min="0" max="100" className="form-control" value={formData.trabalhosPC} onChange={(e) =>

                            setFormData({ ...formData, trabalhosPC: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-6">
            </div>

            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Nota das atitudes</label>
                        <input type="number" min="0" max="20" className="form-control" value={formData.notaAtitudes} onChange={(e) =>

                            setFormData({ ...formData, notaAtitudes: e.target.value })} required />
                    </div>
                </form>
            </div>
            <div className="col-3">
                <form onSubmit={handleSubmit}>
                    {/* Cada campo é controlado — o valor vem do estado React */}
                    <div className="form-group">
                        <label>Atitudes (%)</label>
                        <input type="number" min="0" max="100" className="form-control" value={formData.atitudesPC} onChange={(e) =>

                            setFormData({ ...formData, atitudesPC: e.target.value })} required />
                    </div>
                </form>
            </div>

            <div className="col-12">
                {/* Botões de ação */}
                <button className="btn btn-success mr-2" onClick={handleSubmit}>
                    Calcular
                </button>
                <button className="btn btn-secondary mr-2" onClick={limparFormulario}>
                    Limpar
                </button>
            </div>

            <div className="col-6">
                {dadosSubmetidos && (
                    <div className="card mt-4">
                        <div className="card-body">
                            <h5 className="card-title">Dados Recebidos</h5>
                            <p><strong>Nome do Aluno:</strong> {dadosSubmetidos.nomeAluno}</p>
                            <p><strong>Nota dos Testes:</strong> {dadosSubmetidos.notaTestes}</p>
                            <p><strong>(%) Testes:</strong> {dadosSubmetidos.testesPC}</p>
                            <p><strong>Nota dos Trabalhos:</strong> {dadosSubmetidos.notaTrabalhos}</p>
                            <p><strong>(%) Trabalhos:</strong> {dadosSubmetidos.trabalhosPC}</p>
                            <p><strong>Nota das Atitudes:</strong> {dadosSubmetidos.notaAtitudes}</p>
                            <p><strong>(%) Atitudes:</strong> {dadosSubmetidos.atitudesPC}</p>
                            <p><strong>Nota Final:</strong> {calcularNotaFinal(dadosSubmetidos)}</p>
                            <p><strong>Resultado:</strong> {aprovacao(dadosSubmetidos)}</p>
                        </div>
                    </div>
                )}
            </div>

            <ul className="col-12 list-group mt-4">
                {notas.map((nota) => (
                    <li key={nota.id} className="list-group-item">
                        <p><strong>Nome:</strong> {nota.nomeAluno}</p>
                        <p><strong>Nota do Teste:</strong> {nota.notaTestes}</p>
                        <p><strong>(%) Teste:</strong> {nota.testesPC}</p>
                        <p><strong>Nota dos Trabalhos:</strong> {nota.notaTrabalhos}</p>
                        <p><strong>(%) Trabalhos:</strong> {nota.trabalhosPC}</p>
                        <p><strong>Nota das Atitudes:</strong> {nota.notaAtitudes}</p>
                        <p><strong>(%) Atitudes:</strong> {nota.atitudesPC}</p>
                        <p><strong>Nota Final:</strong> {calcularNotaFinal(nota)}</p>
                        <p><strong>Resultado:</strong> {aprovacao(nota)}</p>
                        <button type="button" className="btn btn-outline-danger mt-2" onClick={() => eliminaNota(nota.id)}>
                            Eliminar
                        </button>
                    </li>

                ))}
            </ul>
        </div>
    );
}
export default Notas;