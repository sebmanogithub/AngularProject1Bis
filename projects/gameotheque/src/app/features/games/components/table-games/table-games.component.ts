import { Component, input, output } from '@angular/core';
import { VideoGame } from '../../../models/video-game';

@Component({
  selector: 'app-table-games',
  standalone: true,
  imports: [],
  templateUrl: './table-games.component.html',
  styleUrl: './table-games.component.css'
})
export class TableGamesComponent {
  items = input.required<VideoGame[]>();
  title = input<string>('');
  toCreate = output<void>();
  toCancel = output<void>();

  clickToAddNewVideoGame(): void {
    this.toCreate.emit();
  }

  cancelNewVideoGame(): void {
    this.toCancel.emit();
  }
}
