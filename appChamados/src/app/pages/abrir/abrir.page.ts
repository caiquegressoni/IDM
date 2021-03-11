import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-abrir',
  templateUrl: 'abrir.page.html',
  styleUrls: ['abrir.page.scss'],
})
export class AbrirPage implements OnInit {

  constructor(public http: HttpClient) {
  }
  ngOnInit() { }

  sendPostRequest(dados) {


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
  }
}