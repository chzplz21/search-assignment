import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
        { 
          "name":"Steve",
          "id": 1,     
          "type": "Employee", 
          "position": "Engineer",
          "company_array": [
            {
                "name": "Toyota",
                "industry": "Automobiles"
                
            },
                {
                "name": "Ford",
                "industry": "Automobiles"
                
            }
            
          ]
      },
      { 
          "name":"Mary",
          "id": 2,     
          "type": "Employee", 
          "position": "Manager",
          "company_array": [
            {
                "name": "IBM",
                "industry": "Tech"
                
            },
                {
                "name": "Apple",
                "industry": "Tech"
                
            }
            
          ]
      }

    ];
    return {employees};
  

    }

}
