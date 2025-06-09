    import { Component } from '@angular/core';
    import {FormsModule} from '@angular/forms';
    import { RouterLink } from '@angular/router';
    import { authService } from '../services/auth.services';

    @Component({
      selector: 'app-login',
      imports: [FormsModule, RouterLink],
      templateUrl: './login.component.html',
      styleUrls: ['./login.component.css']
    })
    export class LoginComponent {

      service = new authService
      displayMessage: string = '';

          onClick(){
            this.displayMessage = this.service.getMessage()
            
          }
    }
