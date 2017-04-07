import { Component, OnInit } from '@angular/core';
import {AdminService} from "../../../shared/services/admin/admin.service";
import {ItemsService} from "../../../shared/services/shop/items.service";

@Component({
    selector: 'admin-item',
    templateUrl: 'admin-item.component.html'
})
export class AdminItemComponent implements OnInit {

    item: any = {};
    loading = false;
    fileLocation: string;

    constructor(private adminService: AdminService) {

    }

    ngOnInit() {
    }

    createItem() {
        console.log(this.item);
        this.loading = true;
        this.adminService.createItem(this.item).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    upload() {
        this.loading = true;
        var formData = new FormData();
        formData.append("file", this.item.pictureLink);
        this.adminService.upload(formData, this.item.articleNumber).subscribe(
            data => {
                this.fileLocation = data;
                this.item.pictureLink = data;
                this.createItem();
            },
            error => {
                console.log(error);
            }
        );
    }

    fileChangeEvent(event) {
        let file = event.srcElement.files;
        console.log(file);
    }

}