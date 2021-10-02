import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from, Observable } from "rxjs";
import { Campeao } from "./campeoes";

@Injectable({
    providedIn: 'root'
})
export class CampeaoService {

    private campeaoUrl: string = "http://localhost:4200/api/campeao";

    constructor(private httpClient: HttpClient){}

    retrieveAll(): Observable<Campeao[]>{
        return this.httpClient.get<Campeao[]>(`${this.campeaoUrl}/listar`);
    }

   retrieveById(id: number): Observable<Campeao> {
       return this.httpClient.get<Campeao>(`${this.campeaoUrl}/${id}`)
    }

    /* save(campeao: Campeao): void{
        if(campeao.id){
            const index = CAMPEOES.findIndex((campeaoIterator: Campeao)=> campeaoIterator.id === campeao.id);
            CAMPEOES[index] = campeao;
        }
    }

}*/

/* var CAMPEOES: Campeao[] = [
    {
        id: 1,
        nome: 'Claudio',
        email: 'claudio.neves@etec.sp.gov.br',
        corSabre: 'azul',
        tipo: true,
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
        tipo: false,
        afinidadeForca: 5,
        forcaFisica: 10,
        hp: 150,
        habilidadeComSabre: 5,
        mental: 5,
        previsao: 5,
    }
]; */
}