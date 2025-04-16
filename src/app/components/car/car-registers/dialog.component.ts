import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  imports: [MatDialogContent, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogModule, MatButtonModule],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
  }
  closeDialog(): void {
    this.dialogRef.close();
  }
  confirm(): void {
    this.dialogRef.close(true);
  }

}
