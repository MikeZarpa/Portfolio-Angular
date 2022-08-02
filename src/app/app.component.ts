import { Component } from '@angular/core';
import { UsuarioDTO } from './mis-classes/modelsDTO/usuario-dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  usuario!:UsuarioDTO;
  title = 'Portfolio';

  ngOnInit(): void {
  }
}
