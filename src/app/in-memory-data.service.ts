import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const employees = [
        { 
          "name":"Steve",
          "id": 1,     
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
      },
      { 
        "name":"Eva",
        "id": 3,     
        "position": "Engineer",
        "company_array": [
          {
              "name": "General Motors",
              "industry": "Automobile"
              
          },
              {
              "name": "FedEx",
              "industry": "Shipping"
              
          }
          
        ]
    },
    { 
      "name":"Jim",
      "id": 4,     
      "position": "Manager",
      "company_array": [
        {
            "name": "Taco Bell",
            "industry": "Food"
            
        },
            {
            "name": "Applebees",
            "industry": "Food"
            
        }
        
      ]
  }

    ];
   
    return {employees};
  

    }

}
