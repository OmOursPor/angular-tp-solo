import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { responseApiInterface } from "../responseApiInterface"

@Component({
  selector: 'app-manga-details',
  templateUrl: './manga-details.component.html',
  styleUrls: ['./manga-details.component.scss']
})
export class MangaDetailsComponent implements OnInit {
  id: any = '';
  rawList: string = "";
  sort: string | null = "";
  localList: responseApiInterface[] = [];
  article?: responseApiInterface;
  newPannier: string[] = [];
  tablePastPannier: any[] = [];
  pastPannier: string | null = "";
  @Output() newItemEvent = new EventEmitter<responseApiInterface>();

  buy() {
    this.pastPannier = localStorage.getItem("pannier")
    this.pastPannier == null ? null : this.tablePastPannier = JSON.parse(this.pastPannier)
    this.newPannier = [...this.tablePastPannier, this.article]
    localStorage.setItem("pannier", JSON.stringify(this.newPannier))
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.sort = localStorage.getItem("list")
    this.sort == null ? null : this.localList = JSON.parse(this.sort)
    this.article = this.localList[this.id - 1]
  }

}
