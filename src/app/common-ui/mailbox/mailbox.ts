import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
@Component({
  selector: 'mailbox',
  imports: [
    HttpClientModule,
    NgForOf,
    NgIf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './mailbox.html',
  styleUrl: './mailbox.scss'
})
export class Mailbox implements OnInit {
  constructor(private http: HttpClient) {}
  isPrivate = false;
  newShout = '';
  shouts: any[] = [];
  currentPage = 1;
  totalPages = 1;

  ngOnInit() {
    this.loadPage(1);
  }

  loadPage(page: number) {
    this.getShouts(page).subscribe(res => {
      this.shouts = res.messages;
      this.currentPage = res.currentPage;
      this.totalPages = res.totalPages;
    });
  }

  getShouts(page = 1, size = 6) {
    return this.http.get<{ messages: any[], totalPages: number, currentPage: number }>(
      `/api/shouts?page=${page}&size=${size}`
    );
  }

  submitShout() {
    const trimmed = this.newShout.trim();
    if (!trimmed) return;
    this.http.post('/api/shouts', {
      message: trimmed,
      isPrivate: this.isPrivate
    }).subscribe(() => {
      this.newShout = '';
      this.loadPage(1);
    });
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.loadPage(this.currentPage + 1);
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }
  }

}
