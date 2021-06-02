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

  ngAfterViewInit(): void {
    this.handleDragArea();
  }

  /**
   * Listen to events on the drag area to handle if a user drops a file
   * in the drag area. If the user drops a file then it will parse the
   * file to handleFiles function, that will handle the files.
   */
  handleDragArea(): void {
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

  /**
   * If the user uploads a file with input then it will parse the
   * file to handleFiles function, that will handle the files.
   */
  handleInput(e: any) {
    this.handleFiles(e.target.files);
  }

  /**
   * Checks if the user has uploaded only one gpx file, otherwise it will
   * fire an error alert. If the file is correct then it will parse the file
   * to the upload function.
   * 
   * @param files file to be uploaded.
   */
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
  
  /**
   * Uploads a file to the backend storage. If the file is uploaded then
   * it will emit an event with the gpx file filepath.
   * 
   * @param file file to be uploaded
   */
  uploadFile(file: File): void {
    this.status = 'uploading';
    this.trailService.uploadFile(file).subscribe(
      (res) => {
        this.status = "success";
        const filePath = `${res.filepath}`;
        this.filePathEvent.emit(filePath);
      },
      (_) => {
        Swal.fire({
          title: 'Oops',
          text: 'Trail file could not be uploaded. Try again!',
        });
      }
    );
  }

  /**
   * Resets the status of the file uploading process. And also 
   * emits an event with an empty string to reset trail filepath
   * in parent component.
   */
  resetStatus(): void {
    this.status = undefined;
    this.filePathEvent.emit("");
  }
}
