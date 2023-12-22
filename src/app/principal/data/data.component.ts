import { Component, Input, OnInit } from '@angular/core';
import { Dados } from './dados.model';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  @Input() dados!: Dados

  constructor() { }

  ngOnInit(): void {
  }

}
