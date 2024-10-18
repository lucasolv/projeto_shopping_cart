import './SearchBar.css'
import React from 'react'
import {BsSearch} from 'react-icons/bs'
import { useState, useContext } from 'react'
import fetchProducts from '../../api/fetchProducts'
import AppContext from '../../context/AppContext'

const SearchBar = () => {

  const {setProducts, setLoading} = useContext(AppContext)

  const [searchValue, setSearchValue] = useState("")

  const handleSearch = async (event) => {
    event.preventDefault()

    setLoading(true)
    const products = await fetchProducts(searchValue)
    setProducts(products)
    setLoading(false)
    setSearchValue("")
  }

  return (
    <form className='search-bar' onSubmit={handleSearch} >
        <input type="searc" placeholder='Buscar produtos' className='search__input' required onChange={(e)=>setSearchValue(e.target.value)} value={searchValue || ""} />
        <button type="submit" className='search__button'><BsSearch /></button>
    </form>
  )
}

export default SearchBar