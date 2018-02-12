import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from "@angular/common/http";

/**
 * Generated class for the BalancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html',
})
export class BalancePage {
  myaddress: string = '34udZLomYsQj3KC3nJziXdKZBmM2tsZdN4';
  serviceEndpoint: string = 'https://blockexplorer.com/api/addr/';
  response: any;

  constructor(
    public http: HttpClient,
    public navCtrl: NavController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BalancePage');
  }

  getBalance() {
    this.http.get(this.serviceEndpoint + this.myaddress)
      .subscribe(response => {
        console.log(response);
        this.response = response;
      }, error => {
        console.error("Error while getting balance", error);
      });
  }
}
