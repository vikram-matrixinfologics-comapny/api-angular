import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiServiceService } from '../_service/api-service.service';
import { TokenService } from '../_service/token.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	submitted = false;
	registed = false;
  constructor(
  	private formBuilder: FormBuilder, 
  	private api:ApiServiceService,
    private Token:TokenService,
  	private router: Router
  	) { }

  ngOnInit(): void {
  }

  registerForm = this.formBuilder.group({
            Name: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]
        });

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        // display form values on success
       // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));

	  	const user = {
	  	 	name:this.registerForm.controls.Name.value,
	  	 	email:this.registerForm.controls.email.value,
	  	 	password:this.registerForm.controls.password.value
	  	 };

	  	this.registed = this.api.registerUser(user).subscribe(
	  		data => this.handleResponse(data),
      		error => this.handleError(error)
	  		)?true:false;

	  	
    }

      handleResponse(data) {
		    console.log(this.Token.payload(data.access_token));
        this.Token.handle(data.access_token);
		    this.router.navigateByUrl('/profile');
		  }

		 handleError(error){
		 	console.log(error)
		 }

    onReset() {
        this.submitted = false;
        this.registerForm.reset();
    }

}
