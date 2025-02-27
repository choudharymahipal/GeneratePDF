import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  generatePDF() {
    const doc = new jsPDF();

    doc.text('Table Example', 20, 20);
    
    // Adding Tables
    const tableData = [
      ['Name', 'Age', 'Country'],
      ['John Doe', '30', 'USA'],
      ['Alice Smith', '25', 'UK'],
      ['Mahipal', '28', 'India'],
    ];
    autoTable(doc, {
      head: [tableData[0]],
      body: tableData.slice(1),
      startY: 50,
    });

    // Colorful Table
    autoTable(doc, {
      head: [['Name', 'Age', 'Country']],
      body: [
        ['John Doe', '30', 'USA'],
        ['Alice Smith', '25', 'UK'],
        ['Mahipal', '28', 'India'],
      ],
      startY: 100,
      theme: 'grid',
      styles: { fillColor: [200, 220, 255] },
    });

    //Save the PDF
    doc.save('table.pdf');
  }
}
