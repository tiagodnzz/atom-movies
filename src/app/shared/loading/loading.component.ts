import { Component, OnInit } from "@angular/core";
import { LoadingService } from "./loading.service";
import { Subscription } from "rxjs";
import { LoadingType } from "./loading-type";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

    loadingSubscription: Subscription;
    loading$: string = LoadingType.STOPPED;

    constructor(private loadingService: LoadingService) { }

    ngOnInit(): void {
        this.loadingSubscription = this.loadingService.Loading$.subscribe(
            (data: string) => {
                this.loading$ = data;
            }
        )
    }

}