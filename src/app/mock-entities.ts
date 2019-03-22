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
           "name": "Steve",
           "position": "Engineer"
  
       },
  
       {
          "name": "Cartman",
          "position": "Hallway Montior"
  
       }
  
    ]
  
  },
  { 
    "name":"Mary",
    "type": "Employee",
    "position": "Manager",
    "nested_array": [
      {
          "name": "Fedex",
          "industry": "Shipping"
          
      },
          {
          "name": "UPS",
          "industry": "Shipping"
          
      }
      
    ]
},
{
  "name": "Fedex", 
  "type": "Company",
  "industry": "Shipping",
  "nested_array": [

      {
         "name": "Mary",
         "position": "Manager"

     },

     {
        "name": "Stan Marsh",
        "position": "CEO"

     }

  ]

}

  
];