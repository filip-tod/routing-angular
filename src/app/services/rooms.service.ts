import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  rooms = [
    {id: 1, name: 'server-room', capasiti: 0, ocupide: 1}, 
    {id: 2,name:'conference-room', capasiti: 10, ocupide: 0 }, 
     {id: 3,name: 'direktor', capasiti: 1, ocupide: 1}, 
     {id: 4, name:'team-lead', capasiti: 2, ocupide: 0}, 
     {id: 5,name:'class-room', capasiti: 20, ocupide: 1}, 
     {id: 6,name:'devs', capasiti: 22, ocupide: 0}, 
     {id: 7,name:'support', capasiti: 5, ocupide: 0}, 
     {id: 8,name:'tech-lead', capasiti: 1, ocupide: 1}
   ]
  constructor() {
    
   }
}
