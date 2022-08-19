import {Component, OnInit} from '@angular/core';
import { Router,NavigationEnd  } from '@angular/router';
import {filter, map, Observable} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'bowling-playground';
  showNav: Observable<boolean>;
  pathsWithoutMenu = ['/signin', '/signin/email', '/signup', '/signup/info', '/']

  constructor(private router: Router, private location: Location){
    this.showNav = this.router.events.pipe(
      filter((end): end is NavigationEnd => end instanceof NavigationEnd),
      map(end => {
        for(let path in this.pathsWithoutMenu){
          if (this.pathsWithoutMenu[path] === end.url){
            return false
          }
        }
        return true;
      }));
  }


  ngOnInit(): void{
  }
}
