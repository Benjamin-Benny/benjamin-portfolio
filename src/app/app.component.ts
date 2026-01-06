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


    this.titleService.setTitle( "Benjamin Benny | Senior Software Engineer (Backend & Distributed Systems)" );

    this.metaService.addTags([
      {name: 'keywords', content: 'Backend Engineer, Distributed Systems, Go, Java, Microservices, Software Engineer, Backend Developer, Performance Optimization, System Design'},
      {name: 'description', content: 'Senior Software Engineer with 4+ years of experience building scalable backend and distributed systems using Go and Java. Specializes in microservices, performance optimization, and system reliability.'},
    ]);
    
    
    AOS.init(); 

  }
}
