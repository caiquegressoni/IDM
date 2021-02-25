import { Component, OnInit } from '@angular/core';
import { HttpClient, Headers, RequestOptions } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  http: any;

  constructor(public httpClient: HttpClient) {
  }
  ngOnInit() { }

  sendPostRequest() {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    const requestOptions = new RequestOptions({ headers: headers });

    let postData = {
      "name": "Customer004",
      "email": "customer004@email.com",
      "tel": "0000252525"
    }

    this.http.post("http://127.0.0.1:3000/customers", postData, requestOptions)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);
      });
  }
}

