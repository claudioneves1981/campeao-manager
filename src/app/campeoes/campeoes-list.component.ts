import { Component, OnInit } from "@angular/core";
import { Campeao } from "./campeoes";

@Component({
    selector:'app-campeao-list',
    templateUrl:'./campeoes-list.component.html'
})
export class CampeaoListComponent implements OnInit{

    campeoes: Campeao[] = [];

    ngOnInit(): void{

        this.campeoes = [
            {
                nome: 'Claudio',
                email: 'claudio.neves@etec.sp.gov.br',
                corSabre: 'azul',
                tipo: 'jedi',
                afinidadeForca: 5,
                forcaFisica: 5,
                hp: 150,
                habilidadeComSabre: 5,
                mental: 10,
                previsao: 5,
            },
            {
                nome: 'João',
                email: 'cfneguacu@hotmal.com.br',
                corSabre: 'vermelha',
                tipo: 'sith',
                afinidadeForca: 5,
                forcaFisica: 10,
                hp: 150,
                habilidadeComSabre: 5,
                mental: 5,
                previsao: 5,
            }
        ]

    }

}