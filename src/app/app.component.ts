import { Component } from "@angular/core";
@Component({selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.css"]})

export class AppComponent
{
  images: string[] =
  [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/An-225_Mriya.jpg/270px-An-225_Mriya.jpg",
    "https://upload.wikimedia.org/wikipedia/en/thumb/d/da/Knock_Nevis.jpg/300px-Knock_Nevis.jpg",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/BelAZ_haul_truck.jpg/250px-BelAZ_haul_truck.jpg"
  ];
  count: number = -1;
  condition: boolean = false;
  imgSrc: string = "";
  changeContent(value: number)
  {
    this.count = value;
    this.condition = true;
    this.imgSrc = this.images[value];
  }
}