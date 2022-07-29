import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {map, Observable, take} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState, currentUserIdSelector} from "../stores/selectors/auth.selector";
import {Injectable} from "@angular/core";

@Injectable()
export class SignUpInfoGuard implements CanActivate{

  constructor(private store: Store<AppState>) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(currentUserIdSelector).pipe(
      take(1),
      map((uid) => uid !== undefined))
    };


}
