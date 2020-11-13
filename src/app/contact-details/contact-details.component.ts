import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import data from './../files/contacts_file.json';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {

  details:boolean;
  contactList:any=[];
  searchText:string;
  contactInfo: any;
  loader: boolean;
  editInfo: any;
  isEdit: boolean =false;
  editForm:FormGroup;
  genderValue='';
  isEditLoader: boolean =false;
  constructor(private formbuilder:FormBuilder) { }

   ngOnInit(): void {
     this.contactList=data;
     console.log("this.contactList.length",this.contactList.length);
     for(let i=0;i < this.contactList.length;i++){
      this.contactList[i].ID=i+1;
     }
     console.log("data",data);
     console.log("this.contactList",this.contactList)
    this.editForm = this.formbuilder.group({
      First_Name: new FormControl("", [Validators.required]),
      Last_Name: new FormControl("", [Validators.required]),
      Gender: new FormControl("", [Validators.required]),
      Nickname: new FormControl("", [Validators.required]),
      Birthday: new FormControl("", [Validators.required]),
      Anniversary: new FormControl("", [Validators.required]),
      Mobile_Phone: new FormControl("", [Validators.required]),
      Home_Phone: new FormControl("", [Validators.required]),
      E_mail_Address: new FormControl("", [Validators.required]),
      E_mail_2_Address: new FormControl("", [Validators.required]),
      Home_Address: new FormControl("", [Validators.required]),
      Home_Street: new FormControl("", [Validators.required]),
      Home_City: new FormControl("", [Validators.required]),
      Home_State: new FormControl("", [Validators.required]),
      Home_Country: new FormControl("", [Validators.required]),
      Home_Postal_Code: new FormControl("", [Validators.required]),
      Home_Fax: new FormControl("", [Validators.required]),

      Job_Title: new FormControl("", [Validators.required]),
      Business_Phone: new FormControl("", [Validators.required]),
      Business_Address: new FormControl("", [Validators.required]),
      Business_Address_2: new FormControl("", [Validators.required]),
      Business_City: new FormControl("", [Validators.required]),
      Business_State: new FormControl("", [Validators.required]),
      Business_Country: new FormControl("", [Validators.required]),
      Business_Postal_Code: new FormControl("", [Validators.required]),
      Business_Fax: new FormControl("", [Validators.required]),
    });
  }

  extractDetails(item){
    this.editInfo=item;
    this.details=false;
    this.loader=true;
    setTimeout(() => {
      this.loader=false;
      this.details=true;
    console.log("item",item);
    this.contactInfo=item;
    }, 1000);
    
  }

  editData(){
    this.isEdit=false;
    this.details=false;
    this.loader=false;
    this.isEditLoader=true;
    console.log("item",this.editInfo);

    setTimeout(() => {
      this.isEditLoader=false;
      this.isEdit=true;
      this.editForm.patchValue({
        First_Name:this.editInfo.First_Name,
        Last_Name: this.editInfo.Last_Name,
        Gender: this.editInfo.Gender,
        Nickname: this.editInfo.Nickname,
        Birthday: this.editInfo.Birthday,
        Anniversary: this.editInfo.Anniversary,
        Mobile_Phone: this.editInfo.Mobile_Phone,
        Home_Phone: this.editInfo.Home_Phone,
        E_mail_Address: this.editInfo.E_mail_Address,
        E_mail_2_Address: this.editInfo.E_mail_2_Address,
        Home_Address: this.editInfo.Home_Address,
        Home_Street: this.editInfo.Home_Street,
        Home_City: this.editInfo.Home_City,
        Home_State: this.editInfo.Home_State,
        Home_Country: this.editInfo.Home_Country,
        Home_Postal_Code: this.editInfo.Home_Postal_Code,
        Home_Fax: this.editInfo.Home_Fax,
  
        Job_Title: this.editInfo.Job_Title,
        Business_Phone: this.editInfo.Business_Phone,
        Business_Address: this.editInfo.Business_Address,
        Business_Address_2: this.editInfo.Business_Address_2,
        Business_City: this.editInfo.Business_City,
        Business_State: this.editInfo.Business_State,
        Business_Country: this.editInfo.Business_Country,
        Business_Postal_Code: this.editInfo.Business_Postal_Code,
        Business_Fax: this.editInfo.Business_Fax,
      })
      
    }, 800);
   
  }

  saveData(value){
    console.log("value",value);
    this.details=false;
    this.loader=false;
    this.isEdit=false;
    this.contactList.forEach(element => {
      if(element.ID == this.editInfo.ID){
        element.First_Name=value.First_Name
        element.Last_Name=value.Last_Name
        element.Gender=value.Gender
        element.Nickname=value.Nickname
        element.Birthday=value.Birthday
        element.Anniversary=value.Anniversary
        element.Mobile_Phone=value.Mobile_Phone
        element.Home_Phone=value.Home_Phone
        element.E_mail_Address=value.E_mail_Address
        element.E_mail_2_Address=value.E_mail_2_Address
        element.Home_Address=value.Home_Address
        element.Home_Street=value.Home_Street
        element.Home_City=value.Home_City
        element.Home_State=value.Home_State
        element.Home_Country=value.Home_Country
        element.Home_Postal_Code=value.Home_Postal_Code
        element.Home_Fax=value.Home_Fax
        element.Job_Title=value.Job_Title
        element.Business_Phone=value.Business_Phone
        element.Business_Address=value.Business_Address
        element.Business_Address_2=value.Business_Address_2
        element.Business_City=value.Business_City
        element.Business_State=value.Business_State
        element.Business_Country=value.Business_Country
        element.Business_Postal_Code=value.Business_Postal_Code
        element.Business_Fax=value.Business_Fax

      }
    });
    console.log("this.contactList",this.contactList);
  }

}
