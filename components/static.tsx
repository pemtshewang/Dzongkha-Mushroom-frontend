import React from 'react';

export function MushroomList() {
  const mushroomNames = [
    "Bitter bolete",
    "Hygrophorus russula",
    "Lactarius delicious",
    "Gomphus floccosus",
    "Cantharellus cibarius",
    "Lyophyllum aggregatum",
    "Shiitake",
    "Ganoderma lucidum",
    "Dacrymyces palmatus",
    "Matsutake"
  ];

  return (
    <div>
      <h2 className="text-muted-foreground italic py-2">Mushroom Names available</h2>
      <p className='py-3 text-gray-600'>Upload image of any mushroom found in this list to map to its Dzongkha name</p>
      <ul className='list-decimal text-muted-foreground space-y-2 italic'>
        {mushroomNames.map((name, index) => (
          <li key={index} >{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MushroomList;
