import { Inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MedService } from '../med.service';

export class Med {
  id!: number;
  marca!: string;
  modelo!: string;
  status = "disponível";
}


@Component({
  selector: 'app-med',
  templateUrl: './med.component.html',
  styleUrls: ['./med.component.css']
})
export class MedComponent implements OnInit {

  displayedColumns: string[] = ['id', 'marca', 'modelo', 'status'];
  
  dataSource = new MatTableDataSource<Med>();

  constructor(private service: MedService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getMeds().subscribe(med => this.dataSource.data = med);
  }

  openNewDialog(): void {
    const dialogRef = this.dialog.open(MngMedDialog, {
      width: '750px',
      data: new Med()
    });
    
    dialogRef.afterClosed().subscribe(med => {
      this.service.adicionar(med).subscribe((medId) => {
        this.service.getMedId(medId).subscribe(newMed => {
          this.dataSource.data = this.dataSource.data.concat(newMed);
        });
      });
    })
  }

  openEditDialog(med: Med): void {
    const dialogRef = this.dialog.open(MngMedDialog, {
      width: '750px',
      data: med
    });
    
    dialogRef.afterClosed().subscribe(med => {
      this.service.editar(med).subscribe(( ) => {
        this.dataSource.data = this.dataSource.data.map(oldMed => {
          if (oldMed.id == med.id) return med;
          else return oldMed
        });
      });
    })
  }

    excluir(med: Med): void {
    this.service.remover(med.id).subscribe(_ => {
      this.dataSource.data = this.dataSource.data.filter(oldMed => oldMed.id != med.id);
     })
  }
}

@Component({
  selector: 'dialog-mng-med',
  templateUrl: 'dialog-mng-med.html'
})
export class MngMedDialog {

  constructor(public dialogRef: MatDialogRef<MngMedDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Med) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}


