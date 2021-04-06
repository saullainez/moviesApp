import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showSeacrhInput = false;
  textSearch = "Buscar película";
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearch(fromSearchIcon:boolean){
    if(fromSearchIcon){
      this.showSeacrhInput = !this.showSeacrhInput;
    }else{
      this.textSearch = this.textSearch.trim();
      if(this.textSearch.length == 0){
        return;
      }
      this.router.navigate(['/search', this.textSearch]);
    }
  }

  onClickSearchInput(){
    this.textSearch = this.textSearch == "Buscar película" ? "" : this.textSearch;
  }

}
