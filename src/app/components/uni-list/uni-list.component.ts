import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-uni-list',
  templateUrl: './uni-list.component.html',
  styleUrls: ['./uni-list.component.css']
})
export class UniListComponent implements OnInit {

  @Output() chosenUni = new EventEmitter<string>();
  @Input() countryChosen: string = "";
  countryListShown: boolean = false;
  countries: string[] = ["Portugal", "Spain", "Germany", "France"];
  @Input() UniList: string[] = [];
  @Input() uniListShown: boolean = false;
  // For displaying details
  shownDetails: boolean = false;
  uniTitle: string = "";
  countrySubtitle: string = "";
  domainLink: string = "";
  href: string = "";

  sendUniToParent(uni: string) {
    this.chosenUni.emit(uni);
  }

  methodsShowDetails(uni: string) {
    this.sendUniToParent(uni);
    this.showDetails(uni);
  }

  async showDetails(uni: string) {
    await fetch(`http://universities.hipolabs.com/search?name=${uni}&country=${this.countryChosen}`).then(response => {
      return response.json();
    }).then(data => {
      this.uniTitle = data[0].name;
      this.countrySubtitle = data[0].country;
      this.domainLink = data[0].domains[0];
      this.href = data[0].web_pages[0];
      
    })

    this.shownDetails = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
