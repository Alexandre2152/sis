import { Component, OnInit } from '@angular/core';
import { DataComponent } from './data/data.component';
import { Dados } from './data/dados.model';
import { PrincipalService } from './principal.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  dados!: Dados[]
  filtroDeBusca: string = '';
  dadosFiltrados!: Dados[];

  constructor(private dadosService: PrincipalService) { }

  ngOnInit(): void {
    this.getDados();
  }

  // TODO: função para carregar os dados
  public getDados() {
    this.dadosService.dados()
      .subscribe( item => {
        this.dados = item
        console.log(item.map(x => x));
      })
  }

  // TODO: função para buscar por filtro
  public buscar() {
    if (this.filtroDeBusca.trim() !== '') {
      this.dados = this.dados.filter((item: Dados) => {
        const values = Object.values(item).map(value => value.toString().toLowerCase());
        return values.some(value => value.includes(this.filtroDeBusca.toLowerCase()));
      });
    } else {
      this.resetarDados();
    }
  }

  // TODO: função para reinicar abusca
  public resetarDados() {
    this.getDados();
  }

}
