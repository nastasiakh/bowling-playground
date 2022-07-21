import { Component, OnInit } from '@angular/core';
import {filter, flatMap, map, Observable} from "rxjs";
import {select, Store} from "@ngrx/store";
import {
  AppState,
  errorMessageSelector,
  errorSolutionSelector
} from "../../stores/selectors/auth.selector";
import {ofType} from "@ngrx/effects";
import {closeToast} from "../../stores/actions/errors.actions";


@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.css']
})
export class ErrorsComponent implements OnInit {

  routerTo = 'signin/email'
  errorMessage$: Observable<string | undefined>
  errorSolution$: Observable<string | undefined>

  constructor(private store: Store<AppState>) {
    this.errorMessage$ = this.store.pipe(select(errorMessageSelector))
    this.errorSolution$ = this.store.pipe(select(errorSolutionSelector))
  }

  ngOnInit(): void {
  }

  closeError(){
    this.store.dispatch(closeToast())
  }
}
