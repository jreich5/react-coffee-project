import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CoffeePage from './CoffeePage.js';

const coffeesData = [
  {id: 1, name: 'Light City', roast: 'light'},
  {id: 2, name: 'Half City', roast: 'light'},
  {id: 3, name: 'Cinnamon', roast: 'light'},
  {id: 4, name: 'City', roast: 'medium'},
  {id: 5, name: 'American', roast: 'medium'},
  {id: 6, name: 'Breakfast', roast: 'medium'},
  {id: 7, name: 'High', roast: 'dark'},
  {id: 8, name: 'Continental', roast: 'dark'},
  {id: 9, name: 'New Orleans', roast: 'dark'},
  {id: 10, name: 'European', roast: 'dark'},
  {id: 11, name: 'Espresso', roast: 'dark'},
  {id: 12, name: 'Viennese', roast: 'dark'},
  {id: 13, name: 'Italian', roast: 'dark'},
  {id: 14, name: 'French', roast: 'dark'}
];

function sortCoffees(a, b) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

function App() {
  
  const [coffees, setCoffees] = useState(coffeesData);
  const [ displayedCoffees, setDisplayedCoffees ] = useState(coffees);
  
  function addCoffee(coffee) {
    coffee.id = coffees.length + 1;
    setCoffees([...coffees, coffee].sort(sortCoffees));
    setDisplayedCoffees([...coffees, coffee].sort(sortCoffees));
  }

  function searchCoffees(search) {
    if (search === '') {
      setDisplayedCoffees(coffees.sort(sortCoffees));
    } else {
      setDisplayedCoffees(coffees.filter(coffee => coffee.name.toLowerCase().startsWith(search.toLowerCase())).sort(sortCoffees));
    }
  }
  
  return (
    <CoffeePage coffees={displayedCoffees} addCoffee={addCoffee} searchCoffees={searchCoffees} />
  );
}

export default App;