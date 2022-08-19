import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  history: string[] = [];
  showBackLink = true;

  constructor(private router: Router, private location: Location) { }

  public startSaveHistory(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd){
        this.history.push(event.urlAfterRedirects)
        console.log(this.history)
        this.showBackLink = true
      }
    })
  }

  public goBack():void {
    this.history.pop()
    if(this.history.length > 0){
      this.location.back()
    } else {
      this.showBackLink = false
      this.router.navigateByUrl('/')
    }
  }
  ngOnInit(): void {
    this.startSaveHistory()
  }

}
