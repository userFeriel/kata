package mini.project.kata.controller;

import mini.project.kata.service.InputService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("kata/api")
@CrossOrigin("*")
public class InputController {

    private final InputService inputService;

    public InputController(InputService inputService) {
        this.inputService = inputService;
    }

    @GetMapping("/transform/{input}")
    public ResponseEntity<String> transformNumberToString(@PathVariable int input) {
        return new ResponseEntity<>(inputService.transformNumberToString(input), HttpStatus.OK);
    }

}
