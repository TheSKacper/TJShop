import { item } from './model/shop';
import { Tag } from './model/Tags';
export const sample_items:item[] = 
[
    {
        id:'1',
        name:'newsweek',
        category:['Newspaper'],
        price:23,
        image:'assets/shop/news.jfif'
    },
    {
        id:'2',
        name:'Adidas',
        category:['Chemistry'],
        price:15,
        image:'assets/shop/gel.jpg'
    },
    {
        id:'3',
        name:'Bravo Sport',
        category:['Newspaper'],
        price:18,
        image:'assets/shop/brawo.jfif'
    },
    {
        id:'4',
        name:'Car',
        category:['Toys'],
        price:45,
        image:'assets/shop/car.jpg'
    },
    {
        id:'5',
        name:'knife',
        category:['Others'],
        price:34,
        image:'assets/shop/knife.png'
    },
    {
        id:'6',
        name:'spoon',
        category:['Others'],
        price:20,
        image:'assets/shop/spoon.jpg'
    },
    {
        id:'7',
        name:'t-shirt',
        category:['Clothes'],
        price:45,
        image:'assets/shop/t-shirt.jpg'
    },
]

export const sample_tags: Tag [] =[
    {name:"All"},
    {name:'Toys'},
    {name:'Chemistry'},
    {name:'Clothes'},
    {name:'Newspaper'},
    {name:'Others'},
]   