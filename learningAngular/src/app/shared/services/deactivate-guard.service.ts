import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardedComponent } from '../interfaces/guardedComponent.interface';

@Injectable({
  providedIn: 'root'
})
export class DeactivateGuardService {
  component: Object;
  route: ActivatedRouteSnapshot;

  constructor() { }

  canDeactivate(
    component: GuardedComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
      let localState: { value: string, msg: string } =  component.canEscape();
      return localState.value ? confirm(localState.msg) : true;
    }
}
