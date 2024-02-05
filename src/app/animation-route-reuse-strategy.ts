import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class AnimationRouteReuseStrategy extends RouteReuseStrategy {
  override store(_route: ActivatedRouteSnapshot, _handle: DetachedRouteHandle | null): void {
    throw Error('Unsupported operation');
  }

  override retrieve(_route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
    throw Error('Unsupported operation');
  }

  override shouldAttach(_route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  override shouldDetach(_route: ActivatedRouteSnapshot): boolean {
    return false;
  }

  override shouldReuseRoute(
    _future: ActivatedRouteSnapshot,
    _curr: ActivatedRouteSnapshot
  ): boolean {
    return false;
  }
}
