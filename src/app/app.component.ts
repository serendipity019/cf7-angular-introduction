import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTabComponent } from './components/person-tab/person-tab.component';
import { Person } from './shared/interfaces/person';

@Component({
  selector: 'app-root',
  imports: [PersonTabComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Panos';

  // step 1: One way binding of data, step 2: put the data with {{}} in html
  person = {
    givenName: 'Panagiotis',
    surname: 'Papapanagiotou',
    age: 36,
    email: 'serendipitya137@aueb.gr'
  }

  // step 3: Component Input
  person0: Person ={
    givenName: "Christopoulos",
    surname: "Fragkoudakis",
    age: 55,
    email: "chfrag@aueb.gr",
    address:"Athens, Greece"
  }

  person1: Person ={
    givenName: "John",
    surname: "Dhir",
    age: 32,
    email: "john@aueb.gr",
    address: 'New York, USA'
  }

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
