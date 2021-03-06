import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

animalDetalhe = '';

  animals: Animal[] = [];
  pessoas: Animal[] = [];

  constructor(private listService: ListService) {
    this.getAnimals();
    this.getPessoas();
  }

  ngOnInit(): void {
  }

showIdade(animal: Animal){
  this.animalDetalhe = `O animal com o nome ${animal.nome} tem ${animal.idade} anos de vida`;
}

removeAnimal (animal: Animal) {
  this.animals = this.animals.filter((a) => animal.nome !== a.nome)
  this.listService.remove(animal.id).subscribe();

}

getAnimals(): void{
  this.listService.getAll().subscribe((animals) => (this.animals = animals))
}

getPessoas(): void{
  this.listService.geTudo().subscribe((pessoas) => (this.pessoas = pessoas))
}

}
