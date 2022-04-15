import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { responseApiInterface } from '../responseApiInterface';

@Component({
  selector: 'app-shop-header',
  templateUrl: './shop-header.component.html',
  styleUrls: ['./shop-header.component.scss']
})
export class ShopHeaderComponent implements OnInit {
  
  newPannier: string[] = [];
  tablePastPannier: any[] = [];
  pastPannier: string | null = "";

  constructor() { } 

  ngOnInit(): void {
    this.pastPannier = localStorage.getItem("pannier")
    this.pastPannier == null ? null : this.tablePastPannier = JSON.parse(this.pastPannier)
  }
}
