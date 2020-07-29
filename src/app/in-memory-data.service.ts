import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Animal } from './animal';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const animals = [
      {
        id: 1,
        name: 'Charlie',
        race: 'Chihuahua',
        age: 4,
        adoption: true,
        votes: 150,
        image: '../../assets/images/150.png',
      },
      {
        id: 2,
        name: 'Sharon',
        race: 'Labrador',
        age: 1,
        adoption: true,
        votes: 120,
        image: '../../assets/images/150.png',
      },
      {
        id: 3,
        name: 'Mike',
        race: 'Pitbull',
        age: 6,
        adoption: false,
        votes: 160,
        image: '../../assets/images/150.png',
      },
      {
        id: 4,
        name: 'Bubu',
        race: 'Pastore Tedesco',
        age: 3,
        adoption: false,
        votes: 180,
        image: '../../assets/images/150.png',
      },
      {
        id: 5,
        name: 'Aisha',
        race: 'Siamese',
        age: 2,
        adoption: true,
        votes: 80,
        image: '../../assets/images/150.png',
      },
      {
        id: 6,
        name: 'Bob',
        race: 'Border Collie',
        age: 4,
        adoption: true,
        votes: 175,
        image: '../../assets/images/150.png',
      },
      {
        id: 7,
        name: 'Clark',
        race: 'Bassotto',
        age: 5,
        adoption: true,
        votes: 90,
        image: '../../assets/images/150.png',
      },
      {
        id: 8,
        name: 'Terry',
        race: 'Chihuahua',
        age: 4,
        adoption: true,
        votes: 140,
        image: '../../assets/images/150.png',
      },
      {
        id: 9,
        name: 'Asia',
        race: 'Alano',
        age: 1,
        adoption: true,
        votes: 35,
        image: '../../assets/images/150.png',
      },
      {
        id: 10,
        name: 'Akai',
        race: 'Segugio',
        age: 6,
        adoption: false,
        votes: 170,
        image: '../../assets/images/150.png',
      },
    ];
    return { animals };
  }

  genId(animals: Animal[]): number {
    return animals.length > 0
      ? Math.max(...animals.map((animal) => animal.id)) + 1
      : 11;
  }
}
