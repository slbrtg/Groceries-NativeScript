import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import { GroceryListService } from "../../shared/grocery/grocery-list.service";
import { Grocery } from "../../shared/grocery/grocery";
import { TextField } from "tns-core-modules/ui/text-field";

@Component({
    selector: "list",
    moduleId: module.id,
    templateUrl: "./list.html",
    styleUrls: ["./list-common.css", "./list.css"],
    providers: [GroceryListService]
})
export class ListComponent implements OnInit {
    constructor(private groceryListService: GroceryListService) {}

    groceryList: Array<Grocery> = [];
    grocery = "";
    @ViewChild("groceryTextField") groceryTextField: ElementRef;

    ngOnInit() {
        this.groceryListService.load()
            .subscribe(loadedGroceries => {
                loadedGroceries.forEach((groceryObject) => {
                    this.groceryList.unshift(groceryObject);
                });
            });
    }

    add() {
        if (this.grocery.trim() === "") {
            alert("Enter a grocery item");
            return;
        }

        // Dismiss the keyboard
        let textField = <TextField>this.groceryTextField.nativeElement;
        textField.dismissSoftInput();

        this.groceryListService.add(this.grocery)
            .subscribe(
                groceryObject => {
                    this.groceryList.unshift(groceryObject);
                    this.grocery = "";
                },
                () => {
                    alert({
                        message: "An error occurred while adding an item to your list.",
                        okButtonText: "kk"
                    });
                    this.grocery = "";
                }
            )
    }
}