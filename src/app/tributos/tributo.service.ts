import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Tributo } from './tributo';
import { TributoServiceModel } from './tributo-service.model';

const PROTHEUS_URL = environment.ProtheusUrl;

@Injectable({
	providedIn: 'root'
})
export class TributoService {

	constructor(private http: HttpClient) { }

	listar(pagina: number, filtro: any = {}): Observable<TributoServiceModel> {

		const params = new HttpParams({fromObject:filtro})
			.append('page', pagina.toString());

		return this.http.get<TributoServiceModel>(`${PROTHEUS_URL}fisa168`, { params });
	}

	buscar(id: string): Observable<Tributo> {    
		return this.http.get<Tributo>(`${PROTHEUS_URL}fisa168/${id}`);
	}

	obterMetadados(): Observable<any[]> {   
		//o objeto httpClient sempre retornará um observable
		return this.http.get<any[]>(`${PROTHEUS_URL}fisa168/metadata`);
	}
}
