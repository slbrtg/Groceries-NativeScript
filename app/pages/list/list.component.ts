import {Component, OnInit} from "@angular/core";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"]
})
export class ListComponent implements OnInit {
    groceryList: Array<Object> = [];

    ngOnInit() {
        this.groceryList.push({ name: "Apples" });
        this.groceryList.push({ name: "Bananas" });
        this.groceryList.push({ name: "Oranges" });
    }
}