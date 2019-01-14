import { Observable } from 'rxjs';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';



@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private auth: AuthService
    ) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        if (this.auth.isAccessTokenInvalido()) {
            console.log('Navegação com access token inválido. Obtendo novo token...');

            return this.auth.obterNovoAccessToken()
                .then(() => {
                    if (this.auth.isAccessTokenInvalido()) {
                        this.router.navigate(['/login']);
                        return false;
                    }

                    return true;
                });
        } else if (next.data.roles && !this.auth.temQualquerPermissao(next.data.roles)) {
            this.router.navigate(['/nao-autorizado']);
            return false;
        }

        return true;
    }
}