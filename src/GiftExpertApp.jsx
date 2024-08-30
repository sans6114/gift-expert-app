import './App.css';

import { useState } from 'react';

import { Button } from 'flowbite-react';

import Heading from '../src/components/Heading';

function GiftExpertApp() {

  const [categories, setCategories] = useState(['One Punch', 'dragon Ball'])

  const onAddCategory = () => {
    setCategories(['valorant',...categories])
  }

  return (
    <main>
      {/* titulo */}
      <Heading title={'Gift Expert App'} subtitle={'An app to improve in REACT library skills'} />
      {/* input */}


      {/* listado de gift*/}
      <ol>

        {
          categories.map((categoria) => {
            return <li key={categoria}>{categoria}</li>
          })
        }
      </ol>
      {/* gift Item*/}
        <Button onClick={onAddCategory}>Click</Button>



    </main>
  )
}

export default GiftExpertApp
