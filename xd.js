import React, { useState, useEffect } from "react";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  useEffect(() => {
    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios")) || [];
    setUsuarios(usuariosGuardados);
  }, []);
  useEffect(() => {
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }, [usuarios]);
  const agregarUsuario = () => {
    if (nombre.trim() === "" || correo.trim() === "") {
      alert("Por favor completa todos los campos.");
      return;}
    const nuevoUsuario = {
      id: usuarios.length + 1,
      nombre,
      correo,
    };
    setUsuarios([...usuarios, nuevoUsuario]);
    setNombre("");
    setCorreo("");
    return }}
    <div style={{ fontFamily: "Arial, sans-serif", margin: "20px" }}>
      <h1>Gestión de Usuarios</h1>
      <div style={{ marginBottom: "20px" }}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingrese el nombre"
            style={{ marginLeft: "10px", padding: "5px" }}
          />
        </label>
        <br />
        <label>
          Correo:
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Ingrese el correo"
            style={{ marginLeft: "10px", padding: "5px", marginTop: "10px" }}
          />
        </label>
        <br />
        <button
          onClick={agregarUsuario}
          style={{
            marginTop: "10px",
            padding: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Agregar Usuario
        </button>
      </div>
      <h2>Lista de Usuarios</h2>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Nombre</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Correo</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {usuario.id}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {usuario.nombre}
                </td>
                <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                  {usuario.correo}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan="3"
                style={{
                  border: "1px solid #ddd",
                  padding: "8px",
                  textAlign: "center",
                }}
              >
                No hay usuarios registrados.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  

export default App;