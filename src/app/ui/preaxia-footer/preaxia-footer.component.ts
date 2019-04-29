import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'preaxia-footer',
  templateUrl: './preaxia-footer.component.html',
  styleUrls: ['./preaxia-footer.component.scss']
})
export class PreaxiaFooterComponent implements OnInit {

  year: number;

  constructor() { }

  ngOnInit() {
    this.year = new Date().getFullYear()
  }

}
