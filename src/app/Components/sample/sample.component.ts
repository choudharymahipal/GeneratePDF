import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  generatePDF(){
    const doc = new jsPDF();
    
    //Add a title to the PDF
    doc.setFont('times');
    doc.setFontSize(22);
    doc.text('This is a title', 20, 20);

    //Add some content to the PDF
    doc.setFontSize(16);
    doc.text('This is a customized PDF document using jsPDF', 20, 30);
    doc.text('TYou can add more content like image, tables and so on.', 20, 40);


    //Save the PDF
    doc.save('sample.pdf');
  }
}
