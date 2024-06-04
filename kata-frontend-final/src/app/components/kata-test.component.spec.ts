import { NO_ERRORS_SCHEMA } from "@angular/core";
import { KataTestComponent } from "./kata-test.component";
import { ComponentFixture, TestBed } from "@angular/core/testing";

describe("KataTestComponent", () => {

  let fixture: ComponentFixture<KataTestComponent>;
  let component: KataTestComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
      ],
      declarations: [KataTestComponent]
    });

    fixture = TestBed.createComponent(KataTestComponent);
    component = fixture.componentInstance;

  });

  it("should be able to create component instance", () => {
    expect(component).toBeDefined();
  });
  
});
