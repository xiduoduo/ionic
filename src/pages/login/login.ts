import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, Loading } from 'ionic-angular';
import { baseUI } from '../../common/baseui';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI {

  mobile:any;
  password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public loadingCtrl: LoadingController) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    var loading = super.showLoading(this.loadingCtrl,"登陆中... ")
  }

  dismiss() {
    this.viewCtrl.dismiss()
  }

}
