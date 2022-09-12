import { Injectable } from '@angular/core';
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
      return component.canEscape();
    }
}
