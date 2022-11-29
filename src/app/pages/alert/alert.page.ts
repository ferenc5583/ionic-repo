import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
  handlerMessage = '';

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false,
      header: 'Alert!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.handlerMessage = 'Alert canceled';
            console.log('cancelo');
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            this.handlerMessage = 'Alert confirmed';
            console.log('confirmo');
          },
        },
      ],
    });

    await alert.present();
  }

  async presentAlertInput() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [
        {
          text: 'OK',
          role: 'confirm',
          handler: (data: any) => {
            this.handlerMessage = 'Alert confirmed';
            console.log(data);
          },
        },
      ],
      inputs: [
        {
          name: 'name1',
          placeholder: 'Name',
        },
        {
          name: 'name2',
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          name: 'name3',
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          name: 'name4',
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
