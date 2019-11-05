import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {LivreService} from '../Services/Livres.service';
import {VolumeInfo} from '../models/volumeInfo.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef, MatPaginator} from '@angular/material';
import {Location} from '@angular/common';

import {FormBuilder, FormGroup} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import {Livre} from '../models/livre.model';
import {Item} from '../models/item.model';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'adz-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit, AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

livres: Item[]=[];
id:string;
values='';
  date:string;
  bookForm: FormGroup;
  standardList: Item[] =[];
  totalBooks:number;
  bookList: Livre[];
  publish:string;
  selectedCategory:Item[];



  constructor(private livreService: LivreService,
              private route: ActivatedRoute,
              private dialog: MatDialog,
              private fb: FormBuilder,
              private _location: Location,
              private ts: TranslateService,
              private router: Router
  ) {
    this.values = this.route.snapshot.paramMap.get('title');

  }

  ngOnInit() {
    this.bookForm = this.fb.group({
      filterName : '',
      filterSelect: ''
    })
    this.getAllBooksByName(this.values);
    this.onFilterNameChange();
    this.onFilterSelectChange();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.totalBooks)
      )
      .subscribe();
  }

  openDialog(book): void {
    this.dialog.open(DescriptionContentComponent, {
      width: '600px',
      data: book

    });
  }

  onFilterNameChange() {
    this.bookForm.controls.filterName.valueChanges.subscribe(filter => {
      const nameBookList = this.standardList.filter(book => book.volumeInfo.title.toLowerCase().includes(filter.toLowerCase()));
      const categoryBookList = this.standardList.filter(book => {
        let cat;
        if(book.volumeInfo.categories !== undefined && book.volumeInfo.categories.length != 0 ){
          cat = book.volumeInfo.categories.filter(category=>category.toLowerCase().includes(filter.toLowerCase()))
          if(cat.length == 0)
            return false;
        }
        if(cat !== undefined )
        {
          return book.volumeInfo.categories.indexOf(cat[0]) > -1
        }
      });
      const authorBookList = this.standardList.filter(book => {
        let author;
        if(book.volumeInfo.authors !== undefined && book.volumeInfo.authors.length != 0 ){
          author = book.volumeInfo.authors.filter(auth=>auth.toLowerCase().includes(filter.toLowerCase()))
          if(author.length == 0)
            return false;
        }
        if(author !== undefined )
        {
          return book.volumeInfo.authors.indexOf(author[0]) > -1
        }
      });
      const finalList=nameBookList.concat(categoryBookList).concat(authorBookList);
      //remove redendent
     /* this.livres = finalList.filter((obj, pos, arr) => {
        return arr.map(mapObj => mapObj['publishedDate']).indexOf(obj['publishedDate']) === pos;
      });*/
      this.livres=finalList;
      if(!filter) {
        this.getAllBooksByName(this.values);
      }
    })

  }
  onFilterSelectChange(){
    this.bookForm.controls.filterSelect.valueChanges.subscribe(filter => {
      if(filter)
        this.livres=[filter]
      else
        this.getAllBooksByName(this.values)
    })


  }

  getAllBooksByName(name){
    const browserLang = this.ts.getBrowserLang();
    this.livreService.getLivreTitre(name+'&langRestrict='+browserLang).then(livre=>{
      this.livres= livre.items;
      this.standardList= livre.items;
      this.totalBooks= livre.totalItems;
      console.log(this.livres);
    })
  }
  back(){
    this.router.navigate(['']);

  }


}

@Component({
  selector: 'adz-descriptionContent',
  templateUrl: 'descriptionContent.component.html',
})

export class DescriptionContentComponent {
  book: VolumeInfo[];

  constructor(public dialogRef: MatDialogRef<DescriptionContentComponent>,
  @Inject(MAT_DIALOG_DATA) public data) {
      this.book=data;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }


}
