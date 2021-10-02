import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CampeaoService } from "./campeao.service";
import { Campeao } from "./campeoes";


@Component({
    templateUrl:'./campeao-info.component.html'
})
export class CampeaoInfoComponent implements OnInit{

   campeao!: Campeao; 
  // id!: bigint;

    constructor(private activatedRoute: ActivatedRoute, private campeaoService: CampeaoService){}

    ngOnInit(): void {

    this.campeaoService.retrieveById(+this.activatedRoute.snapshot.paramMap.get('id')!).subscribe({
        next: campeao => this.campeao = campeao,
        error: err => console.log('Error', err)
    });
    
    }

    save(): void{
     //   this.campeaoService.save(this.campeao);
    }
}