import React from "react";

const PersonasList = ({ personas }) => {
  return (
    <div>
      <h2>Listado de Personas</h2>
      <ul>
        {personas.map((persona) => (
          <li key={persona.cedula}>
            {persona.nombre} {persona.apellido} - Edad: {persona.edad} - Cédula:{" "}
            {persona.cedula}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonasList;
