import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'preaxia-nav',
  templateUrl: './preaxia-nav.component.html',
  styleUrls: ['./preaxia-nav.component.scss']
})
export class PreaxiaNavComponent implements OnInit {

  constructor(
    public authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  login() {
    this.router.navigateByUrl("login");
  }

  logout() {
    this.authService.signOut();
  }

}
