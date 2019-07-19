import {Component, OnInit} from '@angular/core';
import {Cliente} from '../../shared/models/cliente.model';
import {ClienteService} from '../../shared/service/cliente.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {fadeInRightAnimation} from '../../../../@fury/animations/fade-in-right.animation';
import {fadeInUpAnimation} from '../../../../@fury/animations/fade-in-up.animation';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.scss'],
  animations: [fadeInRightAnimation, fadeInUpAnimation]
})
export class ClienteListComponent implements OnInit {

  clientes: Cliente[] = [];
  posible_muerte;
  promedioEdad: number;
  displayedColumns = ['nombre', 'apellido', 'edad', 'fecha_nacimiento', 'posible_muerte'];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.listaClientes();
  }

  listaClientes() {
    this.clienteService.getClientes().subscribe((data: any) => {
      this.clientes = data;

      this.promedioEdad = this.calcularPromedioEdades(this.clientes);
      /*this.posible_muerte = (data.fecha_nacimiento.toDateString().setFullYear(data.fecha_nacimiento.toDateString().getFullYear() + 50));*/
    });
  }

  crearCliente() {
    this.router.navigate(['/configuracion', 'cliente', 'create']);
  }

  calcularPromedioEdades(clientes: Cliente[]) {
    let sumaEdades = 0;
    sumaEdades = clientes.reduce((a, b) => a + b.edad, 0);
    return sumaEdades / clientes.length;
  }

}
