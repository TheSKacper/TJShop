import { Injectable } from '@angular/core';
import { item } from '../model/shop';
import { sample_items, sample_tags } from '../data';
import { Tag } from '../model/Tags';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  constructor() { }

  getAllItem():item[]
  {
    return sample_items
  }

  getAllTags():Tag[]
  {
    return sample_tags
  }

  getItemBySearch(searchTerm:string)
  {
    return this.getAllItem().filter(item => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }


  getTagsByTag(tag:string):item[]
  {
    return tag === 'All'?
    this.getAllItem():
    this.getAllItem().filter(item => item.category?.includes(tag))
  }
}
