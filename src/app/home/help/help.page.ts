import { DataService } from './../../data.service';
import { FunctionsService } from './../../functions.service';
import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';

const { Browser } = Plugins;
@Component({
  selector: 'app-help',
  templateUrl: './help.page.html',
  styleUrls: ['./help.page.scss'],
})
export class HelpPage implements OnInit {

  faqs: any;
  links: Array<string>;

  constructor(private fun: FunctionsService, private dataService: DataService) {
    this.faqs = dataService.faqs;
    this.links = Object.keys(this.faqs);
  }

  ngOnInit() {
  }

  async open(i) {
    this.openLink(Object.values(this.faqs)[i]);
  }
  async openLink(link) {
    await Browser.open(
      {
        url: link,
        toolbarColor: "#40A944"
      }
      );
  }

}
