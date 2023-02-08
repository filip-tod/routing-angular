import { Router } from '@angular/router';
import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  rooms: any[];
  name: string='';
  capasiti= 0;
  ocupide= 0;

  constructor(private router: Router, private roomService: RoomsService){
    this.rooms = roomService.rooms;
   }

   navigateToDetail(id: number){
    this.router.navigate(['/detail',id]);
   }

   spremi(){
     this.rooms.push({name: this.name, capasiti:this.capasiti, ocupide: this.ocupide});
     
   }
}
