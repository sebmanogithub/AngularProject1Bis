import { delay, filter, map, Observable, of } from "rxjs";
import { GetAllGames } from "../get-all-video-games.service";
import { VideoGames } from "../../../models/video-game";

export const fakeInMemoryGetAllVideoGamesService: GetAllGames = {
    getAll() : Observable<VideoGames> {
        const table : VideoGames = [
            { dateSortie: new Date(), nom:'Abe'},
            { dateSortie: new Date(), nom:'The last of us'},
            { dateSortie: new Date(), nom:'Dune'}
        ]

        return of(table).pipe(
            filter(items => items.length > 0),
            filter(items => {
                const findingItem = items.find(item => item.dateSortie.getFullYear() == new Date().getFullYear())
                return findingItem !== undefined;
            }),
            delay(1500),
            map(items => {
                return items.filter(item => item.dateSortie.getFullYear() == new Date().getFullYear())
            })
        )
    }
}