import { Injectable } from "@angular/core";
import { LoadingType } from "./loading-type";
import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LoadingService {

    loading: string = LoadingType.STOPPED;
    private change = new Subject<string>();

    Loading$ = this.change.asObservable();

    start() {
        this.loading = LoadingType.STARTED;
        this.change.next(this.loading);
    }

    stop() {
        this.loading = LoadingType.STOPPED;
        this.change.next(this.loading);
    }
}