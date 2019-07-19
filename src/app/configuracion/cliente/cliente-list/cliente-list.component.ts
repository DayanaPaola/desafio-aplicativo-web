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
  displayedColumns = ['nombre', 'apellido'];

  constructor(private clienteService: ClienteService,
              private router: Router,
              private snackbar: MatSnackBar) {
  }

  ngOnInit() {
    this.listaClientes();
  }

  listaClientes() {
    this.clienteService.getClientes().subscribe((data: any) => {
      console.log(data);
      this.clientes = data;
    });
  }

  crearCliente() {
    this.router.navigate(['/configuracion', 'cliente', 'create']);
  }

}
