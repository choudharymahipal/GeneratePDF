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
    
    // Add text with bold font
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('Angular PDF Generation with jsPDF', 20, 20);

    // Add text with italic font
    doc.setFontSize(12);
    doc.setFont('times', 'italic');
    doc.text('This is an example demonstrating text formatting in jsPDF.', 20, 30);

    // Add colored text
    doc.setTextColor(255, 0, 0);
    doc.text('Colored Text Example', 20, 40);

    // Add bold and italic text
    doc.setFont('courier', 'bolditalic');
    doc.setTextColor(0, 128, 0);
    doc.text('Green Bold Italic Text', 20, 50);

    // Add clickable link
    doc.setFontSize(14);
    doc.setFont('arial', 'bold');
    doc.setTextColor(0, 0, 255);
    doc.textWithLink('Clickable Link Example', 20, 60, { url: 'https://angular.io/' });

    // draw a line
    doc.setDrawColor(255, 165, 0);
    doc.setLineWidth(1);
    doc.line(20, 65, 180, 65);

    //Save the PDF
    doc.save('sample.pdf');
  }
}
