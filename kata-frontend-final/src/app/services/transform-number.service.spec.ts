import { TransformNumberService } from "./transform-number.service";
import { TestBed } from "@angular/core/testing";

describe("TransformNumberService", () => {

  let service: TransformNumberService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TransformNumberService
      ]
    });
    service = TestBed.get(TransformNumberService);

  });

  it("should be able to create service instance", () => {
    expect(service).toBeDefined();
  });

});
