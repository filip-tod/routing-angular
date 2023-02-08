import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  rooms: any[];

 constructor(private router: Router, private roomService: RoomsService){
  this.rooms = roomService.rooms;
 }




   navigateToDetail(id: number){
    this.router.navigate(['/detail',id]);
   }
}
