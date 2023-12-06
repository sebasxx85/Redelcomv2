import { Component, OnInit } from '@angular/core';
import { ApiNodeService } from 'src/app/services/api-node.service';

@Component({
  selector: 'app-api-node',
  templateUrl: './api-node.component.html',
  styleUrls: ['./api-node.component.css']
})
export class ApiNodeComponent implements OnInit {
  data: String = '';
  data2: String = '';

  constructor(
    private ApiNodeService: ApiNodeService,
    private ApiNodeService2: ApiNodeService
  ) { }

  ngOnInit(): void {
    //obteniendo la funcion raiz
    this.ApiNodeService.getData().subscribe((response) => {
      this.data = response
    })
    this.funcionTest()
  }

  funcionTest() {
    //obteniendo la funcion test
    this.ApiNodeService2.getData2().subscribe((response2) => {
      this.data2 = response2
    })
  }



}
