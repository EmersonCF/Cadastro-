import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [empregados, setEmpregados] = useState([]);
  const [form, setForm] = useState({
    nome: "",
    endereco: "",
    dataNascimento: "",
    cargo: "",
    salario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddEmpregado = (e) => {
    e.preventDefault();
    if (
      form.nome &&
      form.endereco &&
      form.dataNascimento &&
      form.cargo &&
      form.salario
    ) {
      setEmpregados([...empregados, form]);
      setForm({ nome: "", endereco: "", dataNascimento: "", cargo: "", salario: "" });
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  const handleDeleteEmpregado = (index) => {
    const newEmpregados = empregados.filter((_, i) => i !== index);
    setEmpregados(newEmpregados);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h1 className="text-center mb-4">Cadastro de Empregados</h1>

          <div className="card shadow">
            <div className="card-body">
              <form onSubmit={handleAddEmpregado}>
                <div className="mb-3">
                  <label className="form-label">Nome</label>
                  <input
                    type="text"
                    name="nome"
                    className="form-control"
                    value={form.nome}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Endereço</label>
                  <input
                    type="text"
                    name="endereco"
                    className="form-control"
                    value={form.endereco}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Data de Nascimento</label>
                  <input
                    type="date"
                    name="dataNascimento"
                    className="form-control"
                    value={form.dataNascimento}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Cargo</label>
                  <input
                    type="text"
                    name="cargo"
                    className="form-control"
                    value={form.cargo}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Salário</label>
                  <input
                    type="number"
                    name="salario"
                    className="form-control"
                    value={form.salario}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Adicionar Empregado
                </button>
              </form>
            </div>
          </div>

          <hr className="my-4" />

          <h2 className="text-center">Lista de Empregados</h2>
          {empregados.length === 0 ? (
            <p className="text-center">Nenhum empregado cadastrado.</p>
          ) : (
            <table className="table table-striped table-bordered mt-3">
              <thead className="table-dark">
                <tr>
                  <th>Nome</th>
                  <th>Endereço</th>
                  <th>Data de Nascimento</th>
                  <th>Cargo</th>
                  <th>Salário</th>
                  <th>Ações</th>
                </tr>
              </thead>
              <tbody>
                {empregados.map((empregado, index) => (
                  <tr key={index}>
                    <td>{empregado.nome}</td>
                    <td>{empregado.endereco}</td>
                    <td>{empregado.dataNascimento}</td>
                    <td>{empregado.cargo}</td>
                    <td>{`R$ ${parseFloat(empregado.salario).toFixed(2)}`}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteEmpregado(index)}
                      >
                        Excluir
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
