import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mybookings',
  templateUrl: './mybookings.component.html',
  styleUrls: ['./mybookings.component.css']
})
export class MybookingsComponent implements OnInit {

  

  booking = [

    { booking_ID:19190 , name: 'Aakash', age: 18,location_from: 'mumbai',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1550 , name: 'Ankush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Ankush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" },
    { booking_ID:1020 , name: 'Aayush', age: 18,location_from: 'Delhi',location_to:'manali',date_of_travel:"20 dec 2021" }

    
 ]
 printss=false

 
 
 constructor() {
  }

 ngOnInit(): void {
 }
 printtable(){
   //call
    this.printss=true
 }

}
