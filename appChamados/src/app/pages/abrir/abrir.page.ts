import { Component, OnInit } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { NomeProviderService } from 'src/nome-provider.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-abrir',
  templateUrl: 'abrir.page.html',
  styleUrls: ['abrir.page.scss'],
})
export class AbrirPage implements OnInit {
  chamados: any;
  id: any;

  constructor(public servidor:  NomeProviderService, public activate: ActivatedRoute) {
  }
  ngOnInit() { }

  abrir(){
    this.servidor.sendPostRequest(this.chamados);
  }
  ionViewWillEnter() {
    this.activate.queryParams.subscribe(params => {
        if (params && params.id) {
          this.id = JSON.parse(params.id);
          console.log(params);
        }
    });
    this.getRetornar();
  } 
  getRetornar(){
    this.servidor.getPegar("id="+this.id+"&type_user=2&id_user=0").subscribe(data => {

      this.chamados = data;
      console.log(data)
    });
  }
  /*sendPostRequest(dados) {


    let postData = JSON.stringify({
      "autonomo_id": "dados.autonomo_id",
      "solicitante_id": "dados.solicitante_id",
      "status": "4",
      "lat": "45.7164",
      "longi": "51.5869",
      "dia_hora": "dados.dia_hora",
      "verbo": "POST",
    });



    this.http.post("https://projetorrw.000webhostapp.com/src/controll/routes/route.chamados_autonomos.php", postData)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
    console.log(postData);
  }*/
}