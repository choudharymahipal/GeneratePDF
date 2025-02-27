import { Component } from '@angular/core';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-page-layout',
  templateUrl: './page-layout.component.html',
  styleUrl: './page-layout.component.scss'
})
export class PageLayoutComponent {
  generatePDF(){
    const doc = new jsPDF();

    //Page Layout Formatting
    doc.text('Page Layout Example', 20, 20);
    doc.setDrawColor(0, 0, 255);
    doc.rect(10, 10, 190, 277); // Page border

    // Add new page
    doc.addPage();
    doc.text('Text on new page', 20, 20);

    //Save the PDF
    doc.save('pagelayout.pdf');
  }
}
