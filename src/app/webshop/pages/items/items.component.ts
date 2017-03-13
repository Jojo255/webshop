import {Component, OnInit} from '@angular/core';
import * as _ from 'lodash';
import {SideBarFilter} from './item-sidebar/model/sidebar-filter';
import {Category} from '../../../shared/models/shop/category';
import {FilterOption} from "./item-sidebar/model/filter-option";
import {Item} from "../../../shared/models/shop/item";
import {ActivatedRoute} from "@angular/router";
import {ItemsService} from "../../../shared/services/items/items.service";

@Component({
  selector: 'items',
  templateUrl: './item.component.html'
})
export class ItemsComponent implements OnInit {

  categoryId: number;
  category: Category;
  items: Item[] = [];
  categories: Array<Category> = [];
  filters: Array<SideBarFilter> = [];

  constructor(private route: ActivatedRoute, private itemsService : ItemsService) {}

  ngOnInit() {

    //Subscribe to id parameter in URL and get items
    this.route.params.subscribe(param => {
      this.categoryId = param['id'];
      this.getItemsinCategory();
    });

    this.getCategories();
  }

  getItemsinCategory() {
    this.itemsService.getItemsInCategory(this.categoryId).subscribe(
        data => {
          this.items = data;
          this.getFilters();
        },
        error => {

        });
  }

  getCategories() {
    this.categories = [
      {
        c_id:1,
        name : 'Nadeln',
        description :'desc',
        childCategories : [
          {
            c_id:2,
            name : 'Nadeln2',
            description :'desc',
            childCategories : [
              {
                c_id:3,
                name : 'Knöpfe',
                description :'desc',
                childCategories : []
              }
            ]
          }
        ]
      },
      {
        c_id:3,
        name : 'Knöpfe',
        description :'desc',
        childCategories : []
      }
    ];
  }

  getFilters() {

    //Create side bar filter objects
    let brandFilters = new SideBarFilter('Marke', []);
    let colorFilters = new SideBarFilter('Farbe', []);
    let materialFilters = new SideBarFilter('Material', []);

    this.items.forEach(i => {

      if( i.brand != null && _.findIndex(brandFilters.options, {name: i.brand}) === -1) {
        brandFilters.options.push(new FilterOption(i.brand, 'brand'));
      }

      if( i.color != null && _.findIndex(colorFilters.options, {name: i.color}) === -1) {
        colorFilters.options.push(new FilterOption(i.color, 'color'));
      }

      if( i.material != null && _.findIndex(materialFilters.options, {name: i.material}) === -1) {
        materialFilters.options.push(new FilterOption(i.material, 'material'));
      }

    });

    this.filters.push(brandFilters, colorFilters, materialFilters);
  }



}
