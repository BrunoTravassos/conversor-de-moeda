import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ConversorService } from '../services';
import { Conversao, ConversaoResponse } from '../models';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css']
})
export class ModalCotacaoComponent implements OnInit {

  @Input() id: string;
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private conversorService: ConversorService
  ) { }

  ngOnInit(): void {
  }

}