import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);
  
  dadJoke: string = ""; 
  chuckNorrisJoke: string = "";
  
  ngOnInit():void {
    // this.jokesService.getDadJokes().subscribe((data) => {
    //   console.log("DAD JOKE", data);
    //   console.log("DAD JOKE", data.joke);
    //   this.dadJoke = data.joke;
    // });

    // this.jokesService.getChunkNorrisJoke().subscribe((data) => {
    //   console.log("CHUCK NORRIS", data);
    //   console.log("CHUCK NORRIS Joke", data.value);
    //   this.chuckNorrisJoke = data.value;
    // })
    this.refreshDadJoke();
    this.refreshChuckNorrisJoke();
  }

  refreshDadJoke(): void {
    this.jokesService.getDadJokes().subscribe((data) => {
      console.log("DAD JOKE", data.joke);
      this.dadJoke = data.joke;
    })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChunkNorrisJoke().subscribe((data) => {
      console.log("CHUCK NORRIS Joke", data.value);
      this.chuckNorrisJoke = data.value;
    })
  }
}
