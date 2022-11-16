import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  constructor() { }
files:any;
  ngOnInit(): void {
  }
  onFileChange(e: any) {
		let totalAllFileSize = 0;
		let duplicateFile;
		for (let i = 0; i < this.files.length; i++) {
			for (let j = 0; j < e.target.files.length; j++) {
				if (this.files[i].name === e.target.files[j].name) {
					duplicateFile = true;
					break;
				}
			}
		}

	
	}
}
