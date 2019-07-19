export const errorMessages = {
  cliente: {
    nombre: [
      {type: 'required', message: 'El nombre del cliente es requerido.'},
      {type: 'maxlength', message: 'El nombre del cliente debe tener máximo 100 caracteres'},
    ],
    apellido: [
      {type: 'required', message: 'El apellido del cliente es requerido.'},
      {type: 'maxlength', message: 'El apellido del cliente debe tener máximo 100 caracteres'},
    ],
    edad: [
      {type: 'required', message: 'La edad del cliente es requerido.'},
      {type: 'pattern', message: 'La edad del cliente solo puede ser números enteros'},
    ],
    fecha_nacimiento: [
      {type: 'required', message: 'La fecha de nacimiento es requerido.'},
      {type: 'maxlength', message: 'El símbolo de la moneda debe tener máximo 10 caracteres'},
    ]
  }
};
