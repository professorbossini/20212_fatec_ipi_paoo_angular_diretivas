import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  esconder = false
  textoBotao = 'Esconder'

  pessoas = [
    {nome: 'José', idade: 18},
    {nome: 'Maria', idade: 22},
    {nome: 'João', idade: 38}
  ]

  onPessoaAdicionada (pessoa){
    this.pessoas = [pessoa, ...this.pessoas]
  }

  alterarExibicao(){
    this.textoBotao = this.esconder ? "Exibir" : "Esconder"
    this.esconder = !this.esconder
  }
}
