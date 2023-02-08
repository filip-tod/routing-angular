import { RoomsService } from './../../services/rooms.service';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  room: any;
constructor(private activatedRoute: ActivatedRoute, private roomsService: RoomsService){
  let id= this.activatedRoute.snapshot.paramMap.get("id");
  this.room=this.roomsService.rooms.filter(r => r.id.toString() == id)[0]


}
}
