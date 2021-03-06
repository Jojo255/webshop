import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {ItemsService} from "../../../shared/services/shop/items.service";
import {Category} from "../../../shared/models/shop/category";

@Component({
    selector: 'admin-item',
    templateUrl: 'admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

    item: any = {};
    loading = false;
    userfile: any;
    categories: Array<Category> = [];

    constructor(private adminService: AdminService, private itemService: ItemsService) {

    }

    ngOnInit() {
        this.itemService.getAllCategories().subscribe(
            data => {
                this.categories = data;
            },
            error => {
                console.log(error);
            });
    }

    create() {
        this.loading = true;
        this.adminService.createItem(this.item).subscribe(
            data => {
                this.item = data;
            },
            error => {
                console.log(error);
            }
        );
        this.uploadFile();
    }

    uploadFile() {
        var formData = new FormData();
        formData.append("file", this.userfile, this.userfile.name);
        this.adminService.upload(formData, this.item.name).subscribe(
            data => {
                this.loading = false;
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    fileChangeEvent(event: any) {
        this.userfile = event.target.files[0];
        console.log(this.userfile);
    }

    onCategorySelectionChange(cat: Category) {
        this.item.category = cat;
    }

}