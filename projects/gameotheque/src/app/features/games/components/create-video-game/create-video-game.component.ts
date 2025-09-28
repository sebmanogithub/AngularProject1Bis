import { Component, inject } from '@angular/core';
import { FormVideoGameComponent } from '../form-video-game/form-video-game.component';
import { VideoGame } from '../../../models/video-game';
import { SaveOneVideoGameService } from '../../services/save-one-video-game.service';

@Component({
  selector: 'app-create-video-game',
  standalone: true,
  imports: [FormVideoGameComponent],
  templateUrl: './create-video-game.component.html',
  styleUrl: './create-video-game.component.css'
})
export class CreateVideoGameComponent {
  private readonly service = inject(SaveOneVideoGameService)

  saveOne(item: VideoGame): void {
    this.service.save(item).subscribe({
      next: savedVideoGame => {
        console.info('Sauvegarde Réussie !')
      },
      error: err => {
        console.info('Oops prob lors de la sauvegarde')
      }
    })
  }
}
