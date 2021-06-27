import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { NuggetsModel } from './nuggets.models'

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  private NuggetsModel: NuggetsModel[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public saveNewNugget(key: any, t:string, d:string){
    var newNugget = new NuggetsModel(key, t, d);
    this._storage?.set(key, newNugget);
    this.logAllNuggets();
  }

  private logAllNuggets() {
    console.log("all Nuggets");
    this._storage.forEach((value, key, index) => {
      console.log(key, value as NuggetsModel)
    })
  }

  public getAllNuggets() {
    var alltasks: NuggetsModel[] = [];
    if (this._storage != null) {
      this._storage.forEach((value, key, index) => {
        alltasks.push(value as NuggetsModel);
      });
    }
    return alltasks;
  }

  public getStorageLength() { 
    return this._storage.length().then((val) => {
      console.log("Length " + val);
      return val;
    })
  }

}
