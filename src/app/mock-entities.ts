import { Entity } from './entity';

export const ENTITIES: any[] = [
    { 
      "name":"Steve",
      "type": "Employee",
      "position": "Engineer",
      "nested_array": [
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
    "name": "Toyota", 
    "type": "Company",
    "industry": "Automobiles",
    "nested_array": [
  
        {
           "name": " Steve ",
           "position": " Engineer "
  
       },
  
       {
          "name": "Cartman",
          "position": "Hallway Montior"
  
       }
  
    ]
  
  }
  
];