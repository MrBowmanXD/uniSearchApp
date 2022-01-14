import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uni-details',
  templateUrl: './uni-details.component.html',
  styleUrls: ['./uni-details.component.css']
})
export class UniDetailsComponent implements OnInit {

  // For displaying details
  @Input() shownDetails: boolean = false;
  @Input() uniTitle: string = "";
  @Input() countrySubtitle: string = "";
  @Input() domainLink: string = "";
  @Input() href: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
