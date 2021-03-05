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

  sendPostRequest() {


    let postData = JSON.stringify({
      "autonomo_id": "5",
      "solicitante_id": "6",
      "status": "4",
      "lat": "45.7164",
      "longi": "51.5869",
      "dia_hora": "2021-01-25 08:07",
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