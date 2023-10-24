// import React from 'react'
import { useAppContext } from '../../context/App.context'
import ListCard from '../listCard/ListCard';

const List = () => {
    const {list, isCardClick} = useAppContext();
  return (
    <div className={`flex flex-wrap gap-3 justify-center mt-3 ${isCardClick? 'none':''}`}>
    {
        list && list.map((card, index)=>{
           return <ListCard card={card} key={index}/>
        })
    }
      
    </div>
  )
}

export default List
