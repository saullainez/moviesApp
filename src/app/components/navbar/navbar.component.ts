import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSeacrhInput = false;
  textSearch = "Buscar película";
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(fromSearchIcon:boolean){
    if(fromSearchIcon){
      this.showSeacrhInput = !this.showSeacrhInput;
    }else{
      console.log(this.textSearch);
    }
  }

  onClickSearchInput(){
    this.textSearch = this.textSearch == "Buscar película" ? "" : this.textSearch;
  }

}
