import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, PatternValidator, Validators} from '@angular/forms';
import {Cliente} from '../../shared/models/cliente.model';
import {ClienteService} from '../../shared/service/cliente.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material';
import {errorMessages} from '../../../shared/custom-messages';

@Component({
  selector: 'app-cliente-create',
  templateUrl: './cliente-create.component.html',
  styleUrls: ['./cliente-create.component.scss']
})
export class ClienteCreateComponent implements OnInit {

  clienteForm: FormGroup;
  cliente = new Cliente();
  submitted = false;
  errors = errorMessages;

  constructor(private clienteService: ClienteService,
              private router: Router,
              private route: ActivatedRoute,
              private snackbar: MatSnackBar,
              private fb: FormBuilder) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.clienteForm = this.fb.group({
      nombre: [this.cliente.nombre, [Validators.required, Validators.maxLength(100)]],
      apellido: [this.cliente.apellido, [Validators.required, Validators.maxLength(100)]],
      edad: [this.cliente.edad, [Validators.required, Validators.pattern('^\\d+$')]],
      fecha_nacimiento: [this.cliente.fecha_nacimiento, [Validators.required]]
    });
  }

  guardarCliente() {
    const cli = new Cliente(this.clienteForm.value);
    cli.id = this.cliente.id;
    this.clienteService.saveCliente(cli);
    this.clienteForm.reset();
    this.router.navigate(['/configuracion', 'cliente']);
  }

  calcelar() {
    this.router.navigate(['/configuracion', 'cliente']);
  }

}
