import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select-country',
  templateUrl: './select-country.component.html',
  styleUrls: ['./select-country.component.css']
})
export class SelectCountryComponent implements OnInit {

  @Output() chosenCountry = new EventEmitter<string>();
  countryChosen: string = "";
  countryListShown: boolean = false;
  @Input() countries: string[] = [];
  UniList: string[] = [];
  uniListShown: boolean = false;
  // For displaying details
  shownDetails: boolean = false;
  uniTitle: string = "";
  countrySubtitle: string = "";
  domainLink: string = "";
  href: string = "";

  sendToParent(country: string) {
    this.chosenCountry.emit(country);
    this.countryListShown = !this.countryListShown;
  }

  showCountryList() {
    this.countryListShown = !this.countryListShown;
  }

  constructor() { }

  async ngOnInit(): Promise<void> {
    let countryList: any[] = [];
    
    await fetch(`http://universities.hipolabs.com/search?country`).then(response => {
      return response.json();
    }).then(data => // console.log(data, " data shown!!!")
      
      data.map((value: any) =>
        countryList.push(value.country)
      )
      
    ).catch(error => {
      console.error("Error: ", error);
    });

    this.countries = [...new Set(countryList)];
  }

}
