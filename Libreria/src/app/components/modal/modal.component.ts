import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LibroInterface } from './../../models/libro';
import { NgForm } from '@angular/forms';
import { DataServiceService } from './../../services/data-service.service';




@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private dataService:DataServiceService) { }
  @ViewChild('btnClose') btnClose: ElementRef;

  ngOnInit() {
  }

  public fechaza: Date;

  onSaveLibro(libroForm: NgForm): void{


    if (libroForm.value.id == null){

      this.dataService.addLibro(libroForm.value);
    } else {
      this.dataService.updateLibro(libroForm.value);
    }

    libroForm.resetForm();
    this.btnClose.nativeElement.click();

  }


}
