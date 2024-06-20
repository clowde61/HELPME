import { Component, OnInit } from '@angular/core';
import { WorldBankService } from './world-bank.service';
import { NgIf, CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule],
  standalone: true
})
export class AppComponent implements OnInit {
  countryInfo: any;

  constructor(private worldBankService: WorldBankService) {}

  ngOnInit() 
  {
    this.fetchCountryInfo('CHAD'); // Replace with desired country code
  }

  fetchCountryInfo(countryCode: string) {
    this.worldBankService.getCountryInfo(countryCode).subscribe(
      data => {
        console.log(data);
        this.countryInfo = data[1][0]; // Adjust based on API response structure
      },
      error => {
        console.error('Error fetching country info:', error);
      }
    );
  }
}
