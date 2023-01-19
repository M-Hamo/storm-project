import { Component, EventEmitter, Input, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxDropzoneModule } from "ngx-dropzone";

@Component({
  standalone: true,
  imports: [CommonModule, NgxDropzoneModule],
  selector: "app-upload-file",
  templateUrl: "./upload-file.component.html",
  styleUrls: ["./upload-file.component.scss"],
})
export class UploadFileComponent {
  @Output() public readonly onFilesChanges = new EventEmitter<File[]>();

  public get files(): File[] {
    return this._files;
  }

  private _files: File[] = [];

  public onSelectFile(event: any): void {
    if (this.files.length > 0) this.onRemoveFile(this.files[0]);
    this._files = event?.addedFiles;
    this.onFilesChanges.emit(this.files);
  }

  public onRemoveFile = (event: any): void => {
    this._files.splice(this.files.indexOf(event), 1);
    this.onFilesChanges.emit(this.files);
  };

  public onCancel = (): void => {
    this._files = [];
    this.onFilesChanges.emit(this.files);
  };
}
