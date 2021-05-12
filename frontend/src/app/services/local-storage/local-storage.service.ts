import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  setToken(token: string) {
    this.set('token', token);
  }

  get(key: string): string | null {
    return localStorage.getItem(key);
  }

  getToken() {
    return this.get('token');
  }

  clear() {
    localStorage.clear();
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }
}
