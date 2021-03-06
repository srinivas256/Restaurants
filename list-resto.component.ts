import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { Collection} from '../data';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {

  constructor(private resto:RestoService) { }
  collected:Collection[] = [];
  ngOnInit(): void {
    this.resto.getList().subscribe((data) =>{
      this.collected = data;
      console.warn(this.collected);

    } )
  }

}
