import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http'; 
import { TokenService } from '../_service/token.service';
import { ApiServiceService } from '../_service/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
    submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private http:HttpClient,
    private api:ApiServiceService,
    private Token:TokenService,
    private router:Router
    ) { }

  ngOnInit(): void {
  }

  	loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        // display form values on success
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.loginForm.value, null, 4));

        const user = {
            email:this.loginForm.controls.email.value,
            password:this.loginForm.controls.password.value
        }

         this.api.login(user).subscribe(
           data=>this.HandleResponce(data),
           error=>this.HandleError(error)
           )

        // return this.http.post('http://localhost:8000/api','user').subscribe(
        //   data=>console.log(data),
        //   error=>console.log(error)
        //   );
    }

    HandleResponce(data){
      console.log(this.Token.loggedIn());
      this.Token.handle(data.access_token);
      this.router.navigateByUrl('/profile');
    }

    HandleError(error){
      console.log(error.error.error);
    }
}
