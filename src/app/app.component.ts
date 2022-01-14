import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  countryChosen: string = "";
  chosenCountryString: string = "";
  countryListShown: boolean = false;
  countries: string[] = ["Portugal", "Spain", "Germany", "France"];
  UniList: string[] = [];
  uniListShown: boolean = false;
  // For displaying details
  shownDetails: boolean = false;
  uniTitle: string = "";
  countrySubtitle: string = "";
  domainLink: string = "";
  href: string = "";

  

  chosenCountry(country: string) {
    this.chosenCountryString = country;
  }
  
  clickedCountry(country: string) {
    let uniList: any[] = [];

    fetch(`http://universities.hipolabs.com/search?country=${country}`).then(response => {
      return response.json();
    }).then(data => //console.log(data, " data shown!!!")
      data.map((value: any) =>
        uniList.push(value.name)
      )
    ).catch(error => {
      console.error("Error: ", error);
    });

    this.UniList = uniList;
    this.uniListShown = true;
    this.countryChosen = country;
  }
  
  showDetails(uni: string) {
     fetch(`http://universities.hipolabs.com/search?name=${uni}&country=${this.countryChosen}`).then(response => {
      return response.json();
    }).then(data => {
      this.uniTitle = data[0].name;
      this.countrySubtitle = data[0].country;
      this.domainLink = data[0].domains[0];
      this.href = data[0].web_pages[0];
      
    })

    this.shownDetails = true;
  }
  
}
