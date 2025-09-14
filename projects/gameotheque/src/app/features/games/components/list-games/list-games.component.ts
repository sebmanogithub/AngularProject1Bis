import { Component } from '@angular/core';
import { VideoGame } from '../../../models/video-game';

@Component({
  selector: 'app-list-games',
  standalone: true,
  imports: [],
  templateUrl: './list-games.component.html',
  styleUrl: './list-games.component.css'
})
export class ListGamesComponent {
  videoGameList: VideoGame[] = [
    { 
      dateSortie: new Date(),
      nom: "Final Fantasy 7"
    },
    { 
      dateSortie: new Date(),
      nom: "Abe"
    },
    { 
      dateSortie: new Date(),
      nom: "Raise of Tomb Raider"
    }
  ]
}
