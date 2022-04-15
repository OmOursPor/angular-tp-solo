import { Component, OnInit, Input } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { responseApiInterface } from '../responseApiInterface';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-shop-body',
  templateUrl: './shop-body.component.html',
  styleUrls: ['./shop-body.component.scss']
})
export class ShopBodyComponent implements OnInit {

  bookCount?: number;
  list: any[] = [];
  filtredList: any[] = [];
  value = '';
  locallist: string = "";

  update(value: string) {
    this.value = value;
    this.list = this.filtredList.filter(item => {
      if (item.title.toLowerCase().includes(this.value.toLowerCase())){
        return item
      }
    })
  }

  pushLike(element: any) {
    if (element.value == 'like') {
      element.value = 'unlike'
      element.classList.toggle('unlike')
    } else {
      element.value = 'like'
      element.classList.toggle('unlike')
    } 

  }

  details(id: number) {
    this.router.navigateByUrl('/'+id);
}

  tri(value: string) {
    if (value == 'A - Z') {
      this.list.sort()
    }
    if (value == 'Z - A') {
      this.list.sort()
      this.list.reverse()
    }
    if (value == 'Plus récent' || value == 'Plus ancien') {
      this.list.sort((a, b) => {
        if( a.createdDate > b.createdDate ) {
          return 1
        } else {
          return -1
        }
      })
      if (value == 'Plus ancien') {
        this.list.reverse()
      }
    }
    this.filtredList = this.list
  }


  private _bookListUrl = 'http://localhost:3000/products';

  constructor(private _httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this._httpClient.get<responseApiInterface[]>(this._bookListUrl)
            .subscribe(response => {
                this.list = response.map(item =>  {
                  return item
                });
                this.filtredList = this.list;
                localStorage.setItem("list", JSON.stringify(this.list))
            });
  } 

}
