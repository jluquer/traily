import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { TrailService } from 'src/app/services/trails/trail.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss'],
})
export class FileUploaderComponent implements AfterViewInit {
  baseUrl = environment.host;
  status?: string; 
  @Input() filepath?: string | null;
  @Output() filePathEvent = new EventEmitter<string>();
  @ViewChild('dragArea') dragArea?: ElementRef;
  constructor(private trailService: TrailService) {}

  ngAfterViewInit() {
    this.handleDragArea();
  }

  handleDragArea() {
    try {
      ['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
        this.dragArea?.nativeElement.addEventListener(eventName, (e: Event) => {
          e.preventDefault();
          e.stopPropagation();
        });
      });

      this.dragArea?.nativeElement.addEventListener('drop', (e: DragEvent) => {
        this.handleFiles(e.dataTransfer?.files)
      });
    } catch (err) {}
  }

  handleInput(e: any) {
    this.handleFiles(e.target.files);
  }

  handleFiles(files?: FileList) {
    try {
      if (!files) throw new Error('No files found');
      if (files?.length > 1) throw new Error("Only one file");
      const file = files[0];
      if (file.type !== 'application/gpx+xml') {
        Swal.fire({
          title: 'Oops...',
          text: 'File must be GPX!',
          icon: 'error',
        });
        throw new Error('Invalid format');
      }

      this.uploadFile(file)
    } catch (err) {
      this.status = 'failed';
    }
  }
  
  uploadFile(file: File): void {
    this.status = 'uploading';
    this.trailService.uploadFile(file).subscribe(
      (res) => {
        this.status = "success";
        const filePath = `${res.filepath}`;
        this.filePathEvent.emit(filePath);
      },
      (err) => {
        Swal.fire({
          title: 'Oops',
          text: 'Trail file could not be uploaded. Try again!',
        });
      }
    );
  }

  resetStatus() {
    this.status = undefined;
    this.filePathEvent.emit("");
  }
}
