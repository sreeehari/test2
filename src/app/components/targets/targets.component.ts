import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from "@angular/forms"; 
import { TargetsService } from 'src/app/targets.service';
import { Targets } from '../targets.model';
@Component({
  selector: 'app-targets',
  templateUrl: './targets.component.html',
  styleUrls: ['./targets.component.css']
})
export class TargetsComponent implements OnInit {
  target: Targets[]; 
  public error = [];
  public statuses = ['Approved', 'Declined','Researching','Pending approval'];
  targetFrmlabel: string = 'Add Target';  
  targetFrmbtn: string = 'Save';
  btnvisibility: boolean = true; 
  public success = '';
  targetForm: FormGroup;  
  constructor(
    private router: Router, private route: ActivatedRoute, private targetsService: TargetsService,private formBuilder: FormBuilder
  ) { }
  onSubmit() {
    let targetID  = this.route.snapshot.paramMap.get("id");
    //code for update
    if(targetID){
      this.targetsService.updateTarget(this.targetForm.value,targetID).subscribe(data => {  
        this.router.navigate(['showtargets']);  
      });
    }else{ // code for new record add
      this.targetsService.createTarget(this.targetForm.value).subscribe(
        data => this.handleResponse(data),
        error => this.handleError(error)
      );
    }
  }
  handleResponse(response) {
    this.success = response.data;
    this.router.navigateByUrl('/showtargets');
  }
  handleError(error) {
   this.error = error.error.errors;
  }
  
  ngOnInit() {
    this.targetForm = this.formBuilder.group({  
      id: [],  
      status: ['', Validators.required],  
      companyName: ['', [Validators.required]],  
      email: ['', [Validators.required,Validators.email]],
      phone1: ['', [Validators.required]],
      phone2: ['', [Validators.required]],
      streetAddress: ['', [Validators.required]],
      city: ['', [Validators.required]],
      state: ['', [Validators.required]],
      zip: ['', [Validators.required]],
      country: ['', [Validators.required]],
      budgetInv: ['', [Validators.required]],
      grossProfit: ['', [Validators.required]],
    }); 
    let targetID  = this.route.snapshot.paramMap.get("id");
    if (targetID) {  
      this.targetsService.getTarget(targetID).subscribe((data: Targets[]) => {  
        this.targetForm.patchValue(data);  
      });  
      this.targetFrmlabel = 'Edit Target';  
      this.targetFrmbtn = 'Update';  
    }
  }

}
