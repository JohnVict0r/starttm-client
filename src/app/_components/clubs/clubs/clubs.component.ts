import { AlertService } from './../../../_services/alert.service';
import { FormBuilder } from '@angular/forms';
import { ClubService } from './../../../_services/club.service';
import { Club } from './../../../_models/club';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  text: string;
  button: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: 'details',
    title: 'Detalhar Clube',
    icon: 'pe-7s-graph',
    text: 'Detalhar informações do clube',
    button: 'Cadastrar',
    class: 'btn btn-info'
  },
  {
    path: 'update',
    title: 'Alterar Clube',
    icon: 'pe-7s-graph',
    text: 'Altere informações do clube',
    button: 'Alterar',
    class: 'btn btn-primary'
  },
  {
    path: 'delete',
    title: 'Deletar Clube',
    icon: 'pe-7s-graph',
    text: 'deletar clube',
    button: 'Alterar',
    class: 'btn btn-danger'
  },
];

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  actions: any[];
  clubs: any[];//change for type Club

  constructor(
    private clubService: ClubService,
    private formBuilder: FormBuilder,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.actions = ROUTES.filter(option => option);
  }

  deleteClub(club: Club): void {
    this.clubService.delete(club.id)
      .subscribe(data => {
        this.clubs = this.clubs.filter(u => u !== club);
      })
  };

  editClub(club: Club): void {
    this.router.navigate(['edit']);
  };

  addClub(): void {
    this.router.navigate(['new']);
  };
}
