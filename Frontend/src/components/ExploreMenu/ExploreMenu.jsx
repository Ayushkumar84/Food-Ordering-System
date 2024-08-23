import React from 'react'
import './ExploreMenu.css'
import {menu_list} from '../../assets/assets'

function ExploreMenu({category, setCategory}){
  return (
    <div>
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore our menu</h1>
            <p className='explore-menu-text'>Tomato was founded with a passion for food and a mission to make dining more convenient. We partner with top local restaurants to bring you an unparalleled dining experience right at home.</p>
            <div className="explore-menu-list">
                {menu_list.map((item, index)=>{
                    return (
                        <div onClick={()=> setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            <img className={category==item.menu_name?"active":""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    </div>
  )
}

export default ExploreMenu