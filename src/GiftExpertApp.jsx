import './App.css';

import { useState } from 'react';

import Heading from '../src/components/Heading';
import { AddCategory } from './components/AddCategory';
import { GridGift } from './components/GridGift';

function GiftExpertApp() {

  const [categories, setCategories] = useState(['valorant'])

  const onAddCategory = (inputValue) => {
    if (categories.includes(inputValue)) return

    setCategories([...categories, inputValue])
  }

  return (
    <main>
      {/* titulo */}
      <Heading title={'Gift Expert App'} subtitle={'An app to improve in REACT library skills'} />
      {/* input */}
      <AddCategory onNewCategory={onAddCategory} />


      {/* listado de gift*/}

      {
        categories.map((categoria) => (
          <GridGift key={categoria} category={categoria} />
        ))
      }
      {/* gift Item*/}




    </main>
  )
}

export default GiftExpertApp
