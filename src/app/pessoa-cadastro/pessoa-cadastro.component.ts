import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-pessoa-cadastro',
  templateUrl: './pessoa-cadastro.component.html',
  styleUrls: ['./pessoa-cadastro.component.css']
})
export class PessoaCadastroComponent{
 
  @Output () pessoaAdicionada = new EventEmitter()

  adicionar (nome, idade){
    this.pessoaAdicionada.emit({nome, idade})
  }
}
