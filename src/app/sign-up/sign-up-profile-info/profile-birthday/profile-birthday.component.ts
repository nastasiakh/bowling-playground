import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-birthday',
  templateUrl: './profile-birthday.component.html',
  styleUrls: ['./profile-birthday.component.css']
})
export class ProfileBirthdayComponent implements OnInit {
  initDay: number = 1
  months = [
    'January', 'February', 'March',
    'April', 'May', 'June',
    'July', 'August','September',
    'October', 'November', 'December'
  ]
  initYear: number = 1900
  day:string = ''
  month:string = ''
  year:string = ''

  constructor() { }

  ngOnInit(): void {
  }

}
