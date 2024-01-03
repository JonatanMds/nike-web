"use client"
import Card from "@/app/patterns/Card"
import shoeNike from '../../../../public/tenisNike.jpg'
import nextGen from '../../../../public/nextGen.webp'
import toxic from '../../../../public/toxic.webp'
import tatum from '../../../../public/tatum1.webp'
import { useState } from "react"

export default function ProductListing(){

  const [searchShoe, setSearchShoe] = useState('')
  const [selectValue, setSelectValue] = useState('total')


  const listOfShoes = [
    {
      key: '1',
      name:'Tatum 1',
      value:'1.000,00',
      photoShoes: tatum,
      popula: true
    },
    {
      key: '2',
      name:'Next Gen',
      value:'1.100,00',
      photoShoes: nextGen,
      popula: true
    },
    {
      key: '3',
      name:'Mb Toxic',
      value:'900,99',
      photoShoes: toxic,
      popula: true
    },
    {
      key: '4',
      name:'name04',
      value:'30,00',
      photoShoes: shoeNike,
      popula: false
    },
    {
      key: '5',
      name:'name05',
      value:'40,00',
      photoShoes: shoeNike,
      popula: false
    },
    {
      key: '6',
      name:'name06',
      value:'50,00',
      photoShoes: shoeNike,
      popula: false
    },
    {
      key: '7',
      name:'name07',
      value:'60,00',
      photoShoes: shoeNike,
      popula: false
    },
    {
      key: '8',
      name:'name08',
      value:'70,00',
      photoShoes: shoeNike,
      popula: false
    },
    {
      key: '9',
      name:'name09',
      value:'80,00',
      photoShoes: shoeNike,
      popula: false
    },
  ]

  function selectBySortAndResetSearch(e: any){
    e.preventDefault()
    setSelectValue(e.target.value)
    setSearchShoe('')
  }

  const filteredShoes = searchShoe.length > 0 ? listOfShoes.filter(shoe => shoe.name.includes(searchShoe)) : []
  const filteredShoesSelected = selectValue === 'populares' ? listOfShoes.filter(shoe => shoe.popula === true) : listOfShoes

  return(
    <section className="w-full flex flex-col px-24 py-6">
        <div className="flex justify-between items-center">
          <p className="text-base">Man Shoes</p>
          <ul className="flex gap-2 text-zinc-600">
            <li className="text-zinc-500">Home</li>
            <li className="text-zinc-400">Man</li>
            <li className="text-zinc-300">Shoes</li>
          </ul>
        </div>
        <div className="flex justify-between items-center py-6">
          <button className="py-2 px-6 bg-black text-white">+ Filter</button>
          <input
            className="p-2 border" 
            type="text" 
            placeholder="Search"
            onChange={(e)=>setSearchShoe(e.target.value)}
            value={searchShoe}
          />
          <div className="flex">
            <p className="text-zinc-300">Sort by:</p>
            <select onChange={selectBySortAndResetSearch}>
              <option value='todas'>Todos</option>
              <option value='populares'>Mais Vendidos</option>
            </select>
          </div>
        </div>
        
        
        
        {searchShoe.length > 0 ?
        <div>
          {filteredShoes.length === 0 ? 
            <h1 className="flex justify-center items-center text-2xl">Item não encontrado</h1> 
            :
            <>
              <ul className="grid grid-cols-3">
              {filteredShoes.map((shoe)=>{
                return(
                  <li key={shoe.key}>
                    <Card nameShoes={shoe.name} photoShoes={shoe.photoShoes} valueShoes={shoe.value}/>
                  </li>
                )
              })}
            </ul>
            <div className="flex justify-center items-center pt-8">
              <button className="py-2 px-6 border border-black">+ Filter</button>
            </div>
            </>
          }
        </div>
        :
        <>
          <ul className="grid grid-cols-3">
            {filteredShoesSelected.map((shoe)=>{
              return(
                <li key={shoe.key}>
                  <Card nameShoes={shoe.name} photoShoes={shoe.photoShoes} valueShoes={shoe.value}/>
                </li>
              )
            })}
          </ul>
          <div className="flex justify-center items-center pt-8">
            <button className="py-2 px-6 border border-black">Show more</button>
          </div>
        </>
      }
      </section>
  )
}