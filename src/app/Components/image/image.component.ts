import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrl: './image.component.scss',
})
export class ImageComponent {
  baseurl = environment.baseURL;

  generatePDF() {
    const doc = new jsPDF();
    const imgData = this.baseurl + '/assets/img/user.jpg'; // Replace with the path to your image in the assets folder
    doc.addImage(imgData, 'JPEG', 10, 10, 180, 160);
    doc.save('image.pdf');
  }

  // generateTablePDF() {
  //   const doc = new jsPDF();
  //   const col = ["ID", "Name", "Country"];
  //   const rows = [
  //     [1, "John Doe", "USA"],
  //     [2, "Anna Smith", "UK"],
  //     [3, "Peter Jones", "Canada"]
  //   ];

  //   doc.autoTable({
  //     head: [col],
  //     body: rows,
  //   });

  //   doc.save('table.pdf');
  // }
}
