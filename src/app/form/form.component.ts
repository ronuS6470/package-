import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'ronak-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {




  }
}
