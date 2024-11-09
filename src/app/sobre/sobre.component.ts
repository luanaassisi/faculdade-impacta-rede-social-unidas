import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { AlertasService } from '../service/alertas.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreNosComponent implements OnInit {

  constructor(
    private alertas: AlertasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (environment.token == '') {
      this.alertas.showAlertDanger('sessão expirada');
      this.router.navigate(['/entrar'])
    }

  }

}


@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
