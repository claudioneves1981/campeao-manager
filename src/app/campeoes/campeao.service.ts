import { Injectable } from "@angular/core";
import { Campeao } from "./campeoes";

@Injectable({
    providedIn: 'root'
})
export class CampeaoService {

    retrieveAll(): Campeao[] {
        return CAMPEOES;
    }

    retrieveById(id: number): Campeao {
        return CAMPEOES.find((campeaoIterator: Campeao) => campeaoIterator.id === id)!;
    }

    save(campeao: Campeao): void{
        if(campeao.id){
            const index = CAMPEOES.findIndex((campeaoIterator: Campeao)=> campeaoIterator.id === campeao.id);
            CAMPEOES[index] = campeao;
        }
    }

}

var CAMPEOES: Campeao[] = [
    {
        id: 1,
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
        id: 2,
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
];