export class Cliente {

  public id: number;
  public nombre: string;
  public apellido: string;
  public edad: number;
  public fecha_nacimiento: Date;

  constructor(data ?: any) {
    if (data) {
      this.id = data.id;
      this.nombre = data.nombre;
      this.apellido = data.apellido;
      this.edad = data.edad;
      this.fecha_nacimiento = data.fecha_nacimiento;
    }
  }
}
