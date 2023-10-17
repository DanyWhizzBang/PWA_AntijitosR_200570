import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names= ['Arely',
  'Adalid',
  'Crisoforo',
  'Dante',
  'Toribio',
  'Panchito'];

  person={
    name:'Ada',
    lastname:'Islas Quintero',
    age:21
  }
  title = 'Mi primera aplicación con Angular';
  name="Arely";
  age=21;
  urlImage='https://static.vecteezy.com/system/resources/previews/023/624/135/original/beautiful-nature-landscape-with-mountains-illustration-free-png.png';
  urlImage2='https://png.pngtree.com/png-clipart/20220124/original/pngtree-landscape-png-image_7189618.png';
  incAge(){
    this.person.age++;
  }

  nombres= '';
  addname(){
    this.names.push(this.nombres);
    this.nombres='';
  }
}
