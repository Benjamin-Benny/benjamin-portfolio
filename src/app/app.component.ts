import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Title, Meta } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import {LanguageService} from "src/app/services/language/language.service"
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'benjamin-portfolio';
  
  constructor(
    private titleService: Title,
    private metaService: Meta,
    private translateService: TranslateService,
    private location: Location,
    private languageService: LanguageService
    ){
    }
  ngOnInit(): void{
    
    this.languageService.initLanguage()


    this.titleService.setTitle( "Benjamin Benny | Full Stack & iOS Developer" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Fullstack, Backend, Frontend, software, developer'},
      {name: 'description', content: 'I have 3 years of experience in developing websites and ios applications. I am dedicated to writing and refactoring clean, reusable and scalable code in Angular and Java. I also build iOS applications applying good practices and development standards using Swift'},
    ]);
    
    
    AOS.init(); 

  }
}
