import { Component, output } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButton } from "@angular/material/button";
import { FormsModule } from '@angular/forms';
import { VideoGame } from '../../../models/video-game';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-form-video-game',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatIconModule, MatInputModule, MatButton,
    MatDatepickerModule],
  templateUrl: './form-video-game.component.html',
  styleUrl: './form-video-game.component.css',
  providers: [provideNativeDateAdapter()]
})
export class FormVideoGameComponent {
  saveItem = output<VideoGame>();
  item: VideoGame = {nom: '', releaseDate: new Date()};

  submitToSave(): void {
    this.saveItem.emit(this.item);
  }
}
