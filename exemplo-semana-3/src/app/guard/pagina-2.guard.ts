import { ActivatedRouteSnapshot, CanActivateFn, MaybeAsync, Resolve, ResolveFn, RouterStateSnapshot } from '@angular/router';
import { User } from '../model/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})

export class Pagina2Guard implements Resolve<User> {
  constructor() { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<User> {
    console.log(route.params["id"]);
    return { id: 1, name: "Gabriel" };
  }
}

//  export const pagina2Guard: ResolveFn<User> = (route, state) => {
//    return { id: 1, name: "Gabriel" };
// };
