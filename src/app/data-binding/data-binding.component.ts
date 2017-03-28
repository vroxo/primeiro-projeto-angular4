import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: string = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagens = 'http://lorempixel.com/400/200/sports/';
  conteudoAtual: string = '';
  conteudoSalvo: string = '';
  isMouseOuver: boolean = false;
  
  constructor() { }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  onClick(){
    alert("click!");
  }

  onKeyup(valor){
    this.conteudoAtual = valor;
  }
  
  onSave(valor){
    this.conteudoSalvo = valor;
  }

  onMouseSpan(){
    this.isMouseOuver = !this.isMouseOuver;
  }

  ngOnInit() {
  }

}
