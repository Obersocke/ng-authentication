import { Component } from "@angular/core";

@Component({
    selector: 'my-header',
    template: `
       
        <header>

          <nav class="navbar navbar-expand-lg navbar-light bg-light">

            <div class="collapse navbar-collapse">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                  <a class="nav-link">Sign In</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Sign Up</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Protected</a>
                </li>
              </ul>
              <ul class="navbar-nav ml-auto">
                <li><a>Logout</a></li>
              </ul>
            </div>
          </nav>
        
        </header>
    `
})
export class HeaderComponent {
}
