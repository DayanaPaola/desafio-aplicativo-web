import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Cliente} from '../models/cliente.model';
import {map} from 'rxjs/operators';
import actions from '@angular/fire/schematics/deploy/actions';

@Injectable({providedIn: 'root'})
export class ClienteService {

  clientes: Observable<any[]>;
  clienteCollection: AngularFirestoreCollection<Cliente>;
  clienteDoc: AngularFirestoreDocument<Cliente>;

  constructor(private afs: AngularFirestore) {
    /*this.clientes = afs.collection('cliente').valueChanges();*/
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
    this.clienteCollection.add(cliente);
  }

}
