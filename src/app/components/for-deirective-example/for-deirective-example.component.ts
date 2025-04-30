import { Component } from '@angular/core';
import { Person } from 'src/app/shared/interfaces/person';
import { PersonTabComponent } from "../person-tab/person-tab.component";

@Component({
  selector: 'app-for-deirective-example',
  imports: [PersonTabComponent],
  templateUrl: './for-deirective-example.component.html',
  styleUrl: './for-deirective-example.component.css'
})
export class ForDeirectiveExampleComponent {
  users: Person[] = [
    {
      "givenName": "Arlyn",
      "surname": "Longworth",
      "email": "alongworth0@sbwire.com",
      "age": 2020,
      "address": "2056 Southridge Place"
    }, {
      "givenName": "Whitby",
      "surname": "Helliar",
      "email": "whelliar1@wikimedia.org",
      "age": 2012,
      "address": "3 Cherokee Plaza"
    }, {
      "givenName": "Darren",
      "surname": "Bartoleyn",
      "email": "dbartoleyn2@tiny.cc",
      "age": 2015,
      "address": "918 Bunker Hill Crossing"
    }, {
      "givenName": "Marie",
      "surname": "Chisman",
      "email": "mchisman3@tmall.com",
      "age": 2021,
      "address": "7 Brickson Park Junction"
    }, {
      "givenName": "Tiler",
      "surname": "Babbage",
      "email": "tbabbage4@ted.com",
      "age": 2017,
      "address": "98 Oxford Park"
    }, {
      "givenName": "Lib",
      "surname": "Cissen",
      "email": "lcissen5@miibeian.gov.cn",
      "age": 2011,
      "address": "44 Pawling Hill"
    }, {
      "givenName": "Catharina",
      "surname": "Cranny",
      "email": "ccranny6@harvard.edu",
      "age": 2016,
      "address": "37 Sachtjen Park"
    }, {
      "givenName": "Alberik",
      "surname": "Haack",
      "email": "ahaack7@mit.edu",
      "age": 2006,
      "address": "73251 Bobwhite Road"
    }, {
      "givenName": "Mariya",
      "surname": "Whitham",
      "email": "mwhitham8@dion.ne.jp",
      "age": 1998,
      "address": "7 Rowland Alley"
    }, {
      "givenName": "Marline",
      "surname": "Stirrup",
      "email": "mstirrup9@t-online.de",
      "age": 2000,
      "address": "3 Troy Point"
    }]
}
