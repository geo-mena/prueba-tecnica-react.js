import React, { useState } from "react";
import PersonaForm from "./components/PersonaForm";
import PersonasList from "./components/PersonasList";

const App = () => {
  const [personas, setPersonas] = useState([]);

  const addPersona = (persona) => {
    setPersonas([...personas, persona]);
  };

  return (
    <div>
      <h1>Sistema de Gestión de Personas</h1>
      <PersonaForm addPersona={addPersona} />
      <PersonasList personas={personas} />
    </div>
  );
};

export default App;
