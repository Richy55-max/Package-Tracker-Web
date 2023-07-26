import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PackageTrakerService {
  constructor(private http: HttpClient) {}
  API_URL: string = 'http://localhost:4000/';

  fetchPackages() {
    return this.http.get(`${this.API_URL}api/package`);
  }

  fetchDelivery() {
    return this.http.get(`${this.API_URL}api/delivery`);
  }

  fetchPackagesById(id: string) {
    return this.http.get(`${this.API_URL}api/package/${id}`);
  }

  createPackage(body: any): Observable<any> {
    return this.http.post(`${this.API_URL}api/package`, body);
  }

  fetchDeveleriesById(id: string) {
    return this.http.get(`${this.API_URL}api/delivery/${id}`);
  }

  searchPackageIds(searchTerm: string): Observable<any[]> {
    const url = `${this.API_URL}packages/search?term=${searchTerm}`;
    return this.http.get<string[]>(url);
  }

  createDelivery(body: any): Observable<any> {
    return this.http.post(`${this.API_URL}api/delivery`, body);
  }
}
