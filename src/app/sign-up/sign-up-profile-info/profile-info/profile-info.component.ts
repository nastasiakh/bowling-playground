import { Component, OnInit } from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {addProfileInfo} from "../../../stores/actions/profile-info.actions";
import {firstValueFrom, map, Observable, take} from "rxjs";
import {AppState, currentUserIdSelector, currentUserSelector} from "../../../stores/selectors/auth.selector";
import {ofType} from "@ngrx/effects";
import {signUpWithEmailSuccessfully} from "../../../stores/actions/auth.actions";

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {
  isActiveMale = false;
  isActiveFemale = false;

  genderValue: string = ''
  days = [1]
  birthDay :string = ''
  months = [
    'January', 'February', 'March',
    'April', 'May', 'June' ,
    'July', 'August', 'September',
    'October', 'November', 'December']
  birthMonth: string = ''
  dateRangeMax = new Date().getFullYear() - 14
  dateRangeMin = this.dateRangeMax - 100
  yearOptions = [this.dateRangeMin]
  birthYear: string = ''
  userBirthday = ''

  error: boolean = false

  userName = ''

  step: number = 1

  currentUserId$: Observable<string|undefined>
  currentUserEmail$: Observable<string|undefined>

  constructor(private router: Router, private store: Store<AppState>) {
    this.currentUserId$ = this.store.pipe(select(currentUserIdSelector))
    this.currentUserEmail$ = this.store.pipe(select(currentUserSelector))
  }

  ngOnInit(): void {
    let y: number = this.dateRangeMin
    do{
      y = y + 1
      this.yearOptions.push(y)
    } while ( y < this.dateRangeMax){
    }
    this.yearOptions.reverse()

    let d: number = 1
    do{
      d = d+1
      this.days.push(d)
    } while (d <= 31)

  }

  changeStep(value: number){
    this.step = value
  }
  changeClassMale() {
    this.isActiveMale = true;
    this.isActiveFemale = false;
  }
  changeClassFemale() {
    this.isActiveMale = false;
    this.isActiveFemale = true;
  }

  birthdayInputValidator(){
    let day = Number(this.birthDay)
    let month = Number(this.birthMonth)
    let year = Number(this.birthYear)
    let date = new Date(year, month, day)

    if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
      console.log('корректна');
      this.changeStep(3)
      this.userBirthday = `${year}-${month}-${day}`
      console.log(this.userBirthday)
    } else {
      this.error = true
      console.log('некорректна');
    }
  }
  async addProfileInfo() {
    if (this.genderValue && this.userBirthday && this.userName) {
      this.store.dispatch(addProfileInfo(
        {
          id: await firstValueFrom(this.currentUserId$),
          email: await firstValueFrom(this.currentUserEmail$),
          gender: this.genderValue,
          birthday: this.userBirthday,
          name: this.userName
        })
      )
      console.log('1')
    }
  }
}
