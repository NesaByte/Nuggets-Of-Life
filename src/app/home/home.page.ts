import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { NuggetsModel } from '../nuggets.models'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  NuggetsModel:NuggetsModel[];

   constructor(private storage: StorageService) { }

 
  ngOnInit() {
    this.NuggetsModel = this.storage.getAllNuggets();
  }
/*
  ionViewWillEnter() {
    this.NuggetsModel = this.storage.getAllNuggets();
  } */


}
