import { Component, OnInit } from "@angular/core";
import { CampeaoService } from "./campeao.service";
import { Campeao } from "./campeoes";

@Component({
    selector:'app-campeao-list',
    templateUrl:'./campeao-list.component.html'
})
export class CampeaoListComponent implements OnInit{

    filteredCampeoes: Campeao[] = [];

    _campeoes: Campeao[] = [];

    _filterBy!: string;

    constructor(private campeaoService: CampeaoService){ }

    ngOnInit(): void{
        this._campeoes = this.campeaoService.retrieveAll();
        this.filteredCampeoes = this._campeoes;
    }

    set filter(value: string){
        this._filterBy = value;
        this.filteredCampeoes = this._campeoes.filter((campeao: Campeao)=> campeao.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
    }

    get filter(){
        return this._filterBy;
    }

}