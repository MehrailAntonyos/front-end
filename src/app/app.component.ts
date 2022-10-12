import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LoaderService } from './service/API/loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'front-end';

  isloading:Subject<boolean>;

  constructor(private Loader:LoaderService){
    this.isloading = this.Loader.isloading
  }
  ngOnInit(): void {
    // this.Loader.getLoader().subscribe(
    //   (data)=>{
    //     this.isloading = data
    //   }
    // )
  }
}

