import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { AccountType, UserGender, AccountFundType } from 'src/app/model/account';
import { Constants } from 'src/app/model/constants';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountComponent implements OnInit {

  userAccountType: number;
  accountTitle: string;
  accountSubTitle: string;

  yourInfoFormGrp: FormGroup;
  companyInfoFormGrp: FormGroup;
  addressFormGroup: FormGroup;
  accountFormGroup: FormGroup;

  isLinear: boolean;
  maxBirthDate = new Date();

  accountType = AccountType;
  userGender = UserGender;
  accountFundType = AccountFundType;
  provinces = Constants.provinces;

  isTermsAndConditions = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.isLinear = false;
    this.createForms();
  }

  ngOnInit() {
  
    this.userAccountType = +this.route.snapshot.paramMap.get('type');

    if ( this.userAccountType === AccountType.Individual ) {
      this.accountTitle = 'Creating Sole Proprietorship account';
      this.accountSubTitle = 'For self-employed and unincorporated businesses';
    } else if ( this.userAccountType === AccountType.Corporation ) {
      this.accountTitle = 'Incorporated Business';
      this.accountSubTitle = 'For incorporated businesses with or without employees';
    }

  }

  createForms() {

    this.yourInfoFormGrp = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      phone: [''],
      emailAddress: ['', [Validators.required, Validators.email] ],
      birthday: [''],
      gender: ['']
    });

    this.companyInfoFormGrp = this.fb.group({

    });

    this.addressFormGroup = this.fb.group( {
      address: ['', Validators.required],
      city: ['', Validators.required],
      province: ['', Validators.required],
      postalCode: ['', Validators.required]
    });

    this.accountFormGroup = this.fb.group( {
      fundType: ['', Validators.required]
    });
  
  }

  isSubmitEnable() {
    let isValid = false;
    if ( this.userAccountType === AccountType.Individual ) {
      isValid = this.yourInfoFormGrp.valid && this.addressFormGroup.valid &&
                this.accountFormGroup.valid && this.isTermsAndConditions;
    } else if ( this.userAccountType === AccountType.Corporation ) {
      isValid = this.companyInfoFormGrp.valid && this.yourInfoFormGrp.valid && this.addressFormGroup.valid &&
                this.accountFormGroup.valid && this.isTermsAndConditions;
    }

    return isValid;
  }

}
