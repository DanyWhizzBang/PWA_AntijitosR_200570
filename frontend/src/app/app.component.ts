import { Component } from '@angular/core'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  names= ['Cristobal Colón',
  'Dante',
  ];

  person={
    name:'Daniel',
    lastname:'Arroyo Méndez',
    age:21
  }
  title = 'Mi primera aplicación con Angular';
  name="Arely";
  age=21;
  urlImage='https://store-images.s-microsoft.com/image/apps.47068.65123785197113223.0191c6ed-9ff7-488b-b8cc-c338d3886461.22b6bd54-5c3d-4ec7-a7cf-7cb514fdecdf?q=90&w=336&h=200';
  urlImage2='https://image.api.playstation.com/vulcan/img/rnd/202010/0613/DofWaSgGffRBByLa8OvYgYFG.png';
  incAge(){
    this.person.age++;
  }

  nombres= '';
  addname(){
    this.names.push(this.nombres);
    this.nombres='';
  }



  deletename(index:number){
    this.names.splice(index,1);
  }

}
