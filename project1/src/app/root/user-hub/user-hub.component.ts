import { CUSTOM_ELEMENTS_SCHEMA, ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-hub',
  // standalone: true,
  // imports: [],
  templateUrl: './user-hub.component.html',
  styleUrl: './user-hub.component.scss',
  // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class UserHubComponent implements OnInit{

  bundleUrl!: string;

  constructor(private changeDetector: ChangeDetectorRef) {
    // super(changeDetector);
  }

  ngOnInit(): void {
    this.bundleUrl = 'http://localhost:4201/main.js';
    console.log("this.bundleUrl....:: ", this.bundleUrl);
    // throw new Error('Method not implemented.');
  }


}
