import { Component } from '@angular/core';
import { AlertService } from '../../providers/alert.service';
import { GeneralService } from '../../providers/general.service';

@Component({
  selector: 'app-terms',
  templateUrl: 'terms.page.html',
  styleUrls: ['terms.page.scss'],
})
export class termsPage {

  constructor(
    public alertService: AlertService, 
    public generalService: GeneralService) {}

}