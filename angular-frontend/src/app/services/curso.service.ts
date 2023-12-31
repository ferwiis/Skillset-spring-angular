import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  urlEndPoint:string='http://localhost:9191/curso';
  httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http: HttpClient) { }

  listar():Observable<Curso[]>{
    return this.http.get<Curso[]>(this.urlEndPoint);
  }

  crear(curso:Curso): Observable<Curso>{
    return this.http.post<Curso>(this.urlEndPoint, curso, 
      {headers:this.httpHeaders});
  }

  ver(id:number):Observable<Curso>{
    return this.http.get<Curso>(`${this.urlEndPoint}/${id}`);
  }

  modificar(curso:Curso):Observable<Curso>{
    return this.http.put<Curso>(`${this.urlEndPoint}/${curso.id}`, curso, 
      {headers:this.httpHeaders});
  }

  eliminar(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders});
  }

  listarPagina(page:string, size:string):Observable<any>{
    const params = new HttpParams()
    .set('page', page)
    .set('size',size);
    return this.http.get<any>(`${this.urlEndPoint}/pagina`,{params:params});
  }
}

