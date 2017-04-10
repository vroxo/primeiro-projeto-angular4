import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  @Input() valor: number = 0;

  @Output() novoValor = new EventEmitter();

  @ViewChild('alterouValor') alterouValor: ElementRef;

  constructor() { }

  ngOnInit() {}

  incrementa(){
    this.valor++;
    this.alterouValor.nativeElement.value = "O Valor foi incrementado!"
    this.enviaNovoValor()
  }

  decrementa(){
    this.valor--;
    this.alterouValor.nativeElement.value = "O Valor foi decrementado!"
    this.enviaNovoValor()
  }

  enviaNovoValor(){
    this.novoValor.emit({novoValor: this.valor})
  }
}
