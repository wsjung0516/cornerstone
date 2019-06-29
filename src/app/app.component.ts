

import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
// import * as cornerstone from 'cornerstone-core/dist/cornerstone.js';
// declare const cornerstone;




// import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CornerstoneService} from './services/cornerstone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

// export class AppComponent implements OnInit, AfterViewInit {

  // AfterViewInit

export class AppComponent implements  OnInit {
  // @ViewChild('testpod') canvasDiv: ElementRef;


  imageData: any;

  constructor(public csS: CornerstoneService) {

  }


  ngOnInit() {
    this.csS.fetchDicomImage(`https://github.com/datalad/example-dicom-structural/blob/master/dicoms/N2D_0005.dcm`).subscribe(res =>  this.imageData = res);
    // for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13, 14 ,15 , 16 , 17 , 18]) {
    //   this.csS.fetchDicomImage(`http://localhost:4200/assets/dicom/im${i}`)
    //     .subscribe(res =>  this.imageData = res);
    // }


  // }

  // ngAfterViewInit() {

  //   for (const i of [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 , 11 , 12 , 13, 14 ,15 , 16 , 17 , 18]) {
  //     this.csS.fetchDicomImage(`http://localhost:4200/assets/dicom/im${i}`)
  //       .subscribe(res =>  this.imageData = res);
  //   }


  // const imageId = 'https://github.com/datalad/example-dicom-structural/blob/master/dicoms/N2D_0005.dcm'//my-mage-url;

  // var element = this.canvasDiv;
  // cornerstone.enable(this.canvasDiv);
  // cornerstone.loadImage(imageId)
  // .then(function (image:any) {
  //   cornerstone.displayImage(element, image);  
  // })
  // ;
}





  

}
