import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  public url="http://localhost:8000";

  constructor() { }
}
