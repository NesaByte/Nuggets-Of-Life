import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
import { NuggetsModel } from '../nuggets.models'
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-write-nugget',
  templateUrl: './write-nugget.page.html',
  styleUrls: ['./write-nugget.page.scss'],
})
export class WriteNuggetPage implements OnInit {

  NuggetsModel:NuggetsModel[];
  input_t: string = "";
  input_d: string = "";

  constructor(public alertController: AlertController, private storage: StorageService, private router: Router) { }

  ngOnInit() {
  }

  onPressSave(input_t:string, input_d:string){
 
    console.log(input_d + input_t);

    

    if(input_t == "" || input_d == ""){
      this.alertController.create({
        header:'Error',
        message:'Please fill the Nugget.',
        buttons: [{
          text: 'OK',
        }]
      }).then(alert => {alert.present();}) 
    }else{
      this.storage.saveNewNugget(Date.now().toString(),input_t, input_d);
      this.input_t = "";
      this.input_d = "";
      this.router.navigate(['/']);
      this.alertController.create({
        header:'Done!',
        message:'Added New Nugget.',
        buttons: [{
          text: 'OK',
        }]
      }).then(alert => {alert.present();}) 
    } 
    
  }

}
