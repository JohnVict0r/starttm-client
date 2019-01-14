import { HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from './../../environments/environment';
import { User } from './../_models/user';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({ providedIn: 'root' })
export class AuthService {

    private BASE_URL = environment.apiUrl;

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    oauthTokenUrl: string;
    registerUrl: string;
    jwtPayload: any;

    constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.carregarToken();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('token');
    }

    logIn(email: string, password: string) {
        const url = `${this.BASE_URL}/oauth/token`;
        return this.http.post<any>(url, { email, password });
    }

    obterNovoAccessToken(): Promise<void> {
        const headers = new HttpHeaders()
            .append("Content-Type", "application/x-www-form-urlencoded")
            .append("Authorization", "Basic YW5ndWxhcjpAbmd1bEByMA==");

        const body = "grant_type=refresh_token";

        return this.http
            .post<any>(this.oauthTokenUrl, body, { headers, withCredentials: true })
            .toPromise()
            .then(response => {
                this.armazenarToken(response.access_token);

                console.log("Novo access token criado!");

                return Promise.resolve(null);
            })
            .catch(response => {
                console.error("Erro ao renovar token.", response);
                return Promise.resolve(null);
            });
    }

    limparAccessToken() {
        localStorage.removeItem("token");
        this.jwtPayload = null;
    }

    isAccessTokenInvalido() {
        const token = localStorage.getItem("token");

        return !token || this.jwtHelper.isTokenExpired(token);
    }

    temPermissao(permissao: string) {
        return this.jwtPayload && this.jwtPayload.authorities.includes(permissao);
    }

    temQualquerPermissao(roles) {
        for (const role of roles) {
            if (this.temPermissao(role)) {
                return true;
            }
        }

        return false;
    }

    private armazenarToken(token: string) {
        this.jwtPayload = this.jwtHelper.decodeToken(token);
        localStorage.setItem("token", token);
    }

    private carregarToken() {
        const token = localStorage.getItem("token");

        if (token) {
            this.armazenarToken(token);
        }
    }

}