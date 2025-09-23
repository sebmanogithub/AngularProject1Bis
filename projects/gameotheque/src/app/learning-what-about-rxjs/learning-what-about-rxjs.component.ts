import { AsyncPipe } from '@angular/common';
import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-learning-what-about-rxjs',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './learning-what-about-rxjs.component.html',
  styleUrl: './learning-what-about-rxjs.component.css'
})
export class LearningWhatAboutRxjsComponent implements OnInit, OnDestroy{
  private readonly subscription = new Subscription()
  elementAAfficher = signal('')

  maPromise = new Promise((resolve, reject) => {
    console.info('PROMISE');
    resolve('Tatouine')
  }).then(item => console.info(`Planete : ${item}`)) // resolve est ASYNC

  // COLD OBSERVABLE
  ships$ = new Observable<string>(subscriber => { //LAZY
    console.info('OBSERVABLE'); //SYNC
    subscriber.next('Tatouine')

    setTimeout(() => {
      subscriber.next('Coruscant')
      subscriber.complete()
    }, 1000);
  })

  ngOnInit(): void {
    console.info('INIT');

    // const subscription = this.ships.subscribe({
    //   next: content => this.elementAAfficher.set(content),
    //   complete: () => console.info('Finito !')
    // });

    // this.subscription.add(subscription);

    // setTimeout(() => {
    //   console.info('ASYNC')
    // }, 0);

    console.info('===> FIN INIT')
  }

  ngOnDestroy(): void {
    console.info('Destroy')
    this.subscription.unsubscribe();
  }
}
