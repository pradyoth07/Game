import { Component, OnInit } from '@angular/core';
import { GameService } from '../services/game.service';

declare var googleyolo: any;
declare var FB: any;
declare var window: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _Game: GameService) {

    
        window.fbAsyncInit = () => {
            FB.init({
                appId      : '2060883297484199',
                cookie     : true,
                xfbml      : true,
                version    : 'v2.12'
            });
                
            FB.AppEvents.logPageView();   
        };

        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = <HTMLScriptElement>d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
  }

  ngOnInit() {
  }

  login(name: string, password: string){
      this._Game.login(name, password);
  }
    fblogin(){
        FB.login((credentials:any)=>{
            console.log(credentials);
        })
    }
    googlelogin(){
        googleyolo.hint({
            supportedAuthMethods: [
            "https://accounts.google.com"
            ],
            supportedIdTokenProviders: [
                {
                    uri: "https://accounts.google.com",
                    clientId: "127811445743-8uo1b7vbretscar7t4kmuqiu8mhq04a5.apps.googleusercontent.com"
                }
            ]
        }).then((credentials: any) =>{
            this._Game.oAuthLogin(credentials.displayName, credentials.idToken, credentials.profilePicture);
            console.log(credentials);
        })
    }

}
