import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Cliente} from '../models/cliente.model';
import {map} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ClienteService {

  clientes: Observable<any[]>;
  clienteCollection: AngularFirestoreCollection<Cliente>;
  successMsg = 'Se registró el cliente de forma correcta.';

  constructor(private afs: AngularFirestore) {
    this.clienteCollection = afs.collection<Cliente>('cliente');
    this.clientes = this.clienteCollection.snapshotChanges().pipe(
      map(accion => accion.map(
        a => {
          const data = a.payload.doc.data() as Cliente;
          const id = a.payload.doc.id;
          return {id, ...data};
        }
      ))
    );
  }

  getClientes() {
    return this.clientes;
  }

  saveCliente(cliente: Cliente) {
    this.clienteCollection.add(cliente).then(_ => alert(this.successMsg));
  }

}
