import { FunctionsService } from './../../services/functions.service';
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

  constructor(private fun: FunctionsService) {
    this.faqs = fun.faqs;
    this.links = Object.keys(this.faqs);
  }

  ngOnInit() {
  }
  onOpen(link) {
    this.fun.navigate(link);
  }

  open(i) {
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
