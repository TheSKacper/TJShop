import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../service/shop.service';
import { item } from '../../model/shop';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {


  public product: item[] = []
  
  constructor(private shopService:ShopService,activeRoute:ActivatedRoute,private router:Router) { 
    activeRoute.params.subscribe((params) =>
    { 
      if(params.searchTerm)
      this.product = this.shopService.getItemBySearch(params.searchTerm)
      else if(params.tag)
      this.product = this.shopService.getTagsByTag(params.tag)
      else
      this.product = this.shopService.getAllItem()
    })
  
}

  ngOnInit(): void {
  }

 
}
