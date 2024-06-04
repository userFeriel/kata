import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { TransformNumberService } from "../services/transform-number.service";
import { ModalDirective } from 'ngx-bootstrap/modal';
@Component({
  selector: "app-kata-test",
  templateUrl: "./kata-test.component.html",
  styleUrls: ["./kata-test.component.scss"]
})

export class KataTestComponent implements OnInit {
  result: string = "";
  // to show the input after transforming it
  data: number = 0;
  @ViewChild(ModalDirective)
  myModal!: ModalDirective;
  constructor(private transformService: TransformNumberService) {

  }
  userData = {
    input: 1
  };



  show(): void {
    this.myModal.show();
  }

  hide(): void {
    this.myModal.hide();
    this.userData.input = 1;
  }

  tester() {
    this.result = "";
    this.show();
  }

  submitForm() {
    this.data = this.userData.input;
    this.transformService.getTransformedNumber(this.userData.input).subscribe(
      value => {
        this.hide();
        this.result = value;
      }
    )
  }

  ngOnInit() {

  }
}
