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

  ETHserviceEndpoint: string = 'https://api.blockcypher.com/v1/eth/main/addrs/';
  myETHaddress: string = '0xFD5618d808A2daBA84164e8fA47fFF82Dd2A50e5';
  serviceParam: string = '/balance';
  ETHresponse: any;
  

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
      this.getETHBalance(); 
  }

  getETHBalance() {
    this.http.get(this.ETHserviceEndpoint + this.myETHaddress + this.serviceParam)
      .subscribe(ETHresponse => {
        console.log(ETHresponse);
        this.ETHresponse = ETHresponse;
      }, error => {
        console.error("Error while getting balance", error);
      });
  }
}
