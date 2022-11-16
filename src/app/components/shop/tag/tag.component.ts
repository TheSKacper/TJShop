import { Component, OnInit } from '@angular/core';
import { Tag } from '../../../model/Tags';
import { ShopService } from '../../../service/shop.service';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.css']
})
export class TagComponent implements OnInit {

  tags?:Tag[]
  constructor(private service:ShopService) {
    this.tags = service.getAllTags()
   }

  ngOnInit(): void {
  }

}
