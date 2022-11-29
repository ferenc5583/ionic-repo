import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  
  personajes: string[] = ['Aquaman', 'Superman', 'Batman', 'Mujer Maravilla', 'Flash'];
  
  toogle: boolean = false;

  constructor() { }
  
  ngOnInit() {
  }
  
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    console.log('Se cambio de la posicion', ev.detail.from, 'a', ev.detail.to);

    ev.detail.complete();

    const itemMover = this.personajes.splice( ev.detail. from, 1 )[0];
    this.personajes.splice( ev.detail. to, 0, itemMover );

    console.log(this.personajes);
  }

}
