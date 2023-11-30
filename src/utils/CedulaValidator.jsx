const cedulaValidator = (cedula) => {
  // Verifica si la cédula tiene exactamente 10 dígitos
  return /^\d{10}$/.test(cedula);
};

export default cedulaValidator;
