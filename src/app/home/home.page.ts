import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { NuggetsModel } from '../nuggets.models'
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  NuggetsModel:NuggetsModel[];

   constructor(private storage: StorageService, private alertController: AlertController) { }

 
  ngOnInit() {
    this.NuggetsModel = this.storage.getAllNuggets();
  }
 
  ionViewWillEnter() {
    this.NuggetsModel = this.storage.getAllNuggets();
  }  

  deleteNugget(toBeDeletedNugget:NuggetsModel){
    this.alertController.create({
      header: 'Attention',
      message : 'Are sure you want to delete? ',
      buttons: [{
        text :'Delete',
        handler : ()=>{ 
          this.storage.deleteNugget(toBeDeletedNugget);
          this.NuggetsModel = this.storage.getAllNuggets();
        }
      },'Cancel']
    }).then(alert => {
      alert.present();
    })
  }
}