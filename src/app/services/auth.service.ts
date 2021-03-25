import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs/operators';
//import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { EnvService } from './env.service';

import { Storage } from '@ionic/storage';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	isLoggedIn = false;
	token: any;
	username: any;
	utype: any;
	u_type: any;
	user_id: any;
	email: any;
	created_at: any;

	constructor(
		private http: HttpClient,
		private storage: Storage,
		private env: EnvService,
	) { }


	login(username: String, password: String) {
		return this.http.post(this.env.API_URL + 'login',
			{ email: username, password: password }
		)
			.pipe(
				tap(username => {
					this.isLoggedIn = true;
					this.username = username['username'];
					this.user_id = username['user_id'];
					this.token = username['token'];
					this.storage.set('token', username['token']);
					this.storage.set('u_type', username['type']);
					this.storage.set('username', username['username']);
					this.storage.set('user_id', username['user_id']);
					this.storage.set('email', username['email']);
					this.storage.set('phone', username['phone']);
					this.storage.set('created_at', username['created_at']);
					this.storage.set('isLoggedIn', true);
					return username;
				}),
			);

	}


	add_request(formdata) {

		const headers = new HttpHeaders()
			.set('Authorization', 'Bearer ' + this.token);


		return this.http.post(this.env.API_URL + 'ticket_create', formdata, { headers: headers }

		)

	}


	reset_password(username: String) {

		const headers = new HttpHeaders()
			.set('Authorization', 'Bearer ' + this.token);

		return this.http.post(this.env.API_URL + 'password/email',
			{ email: username }
		)

	}


	ticket_reply(formdata) {
		//debugger;

		const headers = new HttpHeaders()
			.set('Authorization', 'Bearer ' + this.token);

		return this.http.post(this.env.API_URL + 'ticket_reply', formdata, { headers: headers }

		)

	}

	package_list() {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', 'Bearer ' + this.token);


		return this.http.get(this.env.API_URL + 'package', { headers: headers })
			.pipe(
				tap(user => {
					return user;
				})
			)

	}

	ticket_list(user_id: String) {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', 'Bearer ' + this.token);
		let postData = {
			"user_id": user_id
		}


		return this.http.post(this.env.API_URL + 'ticket', postData, { headers: headers })
			.pipe(
				tap(user => {
					return user;
				})
			)

	}

	dashboard(user_id: String) {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', 'Bearer ' + this.token);
		let postData = {
			"user_id": user_id
		}

		return this.http.post(this.env.API_URL + 'dashboard', postData, { headers: headers })
			.pipe(
				tap(user => {
					return user;
				})
			)

	}


	ticket_view(ticket_id: String) {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', 'Bearer ' + this.token);
		let postData = {
			"ticket_id": ticket_id
		}

		return this.http.post(this.env.API_URL + 'ticket_view', postData, { headers: headers })
			.pipe(
				tap(user => {
					return user;
				})
			)

	}


	payment(user_id: String, payment_id: String, amount: String, product_id: String) {

		const headers = new HttpHeaders().set('Content-Type', 'application/json')
			.set('Accept', 'application/json')
			.set('Authorization', 'Bearer ' + this.token);

		let postData = {
			"user_id": user_id,
			"payment_id": payment_id,
			"amount": amount,
			"product_id": product_id
		}

		return this.http.post(this.env.API_URL + 'payment', postData, { headers: headers })
			.pipe(
				tap(user => {
					return user;
				})
			)
	}


	register(first_name: string, last_name: string, email: string, phone: string, password: string, password_confirmation: string, is_term_accept: number) {

		return this.http.post(this.env.API_URL + 'register', { first_name: first_name, last_name: last_name, email: email, phone: phone, password: password, password_confirmation: password_confirmation, is_term_accept: is_term_accept })
			.pipe(
				tap(user => {
					return user;
				})
			)

	}

	getToken() {

		return this.storage.get('token').then(
			data => {
				this.token = data;

				if (this.token != null) {
					this.username = data['username'];
					this.isLoggedIn = true;
					return this.token;

				} else {

					this.isLoggedIn = false;
					return null;

				}
			},
			error => {
				this.token = null;
				this.isLoggedIn = false;
				return null;
			}
		);
	}


	logout() {

		return this.http.get(this.env.API_URL + 'logout')
			.pipe(
				tap(data => {
					this.storage.remove('username');
					this.storage.remove("u_type");
					this.storage.remove("user_id");
					this.storage.remove("email");
					this.storage.remove("phone");
					this.storage.remove("created_at");
					this.storage.remove("mobile_val");
					this.storage.remove("token");
					this.isLoggedIn = false;
					this.token = null;
					delete this.token;
					return data;
				})
			)
	}


}