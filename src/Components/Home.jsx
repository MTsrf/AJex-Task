import React, { useEffect, useState } from 'react'
import data from '../../src/assets/Menu.json'
const Home = () => {
    const [menus, setMenus] = useState([])
    const [selectedItem, setSelectedItem] = useState([]);
    useEffect(() => {
        setMenus(data)
    }, [])

    const handleClick = (e, item) => {
        e.preventDefault();
        let data = menus.filter((e) => e.userType === item)
        setSelectedItem(data)
    }

    console.log(menus)
    return (
        <>
            <div className="menu">

                <div className="container">
                    <div className='first' onClick={(e) => handleClick(e, "first")}>
                        First
                    </div>
                    <div className='first' onClick={(e) => handleClick(e, "second")}>
                        Second
                    </div>
                </div>
                {
                    selectedItem.map((e, index) => (
                        <ul key={index}>
                            <li>{e.menuId}</li>
                            <li>
                                {e.menuName}
                            </li>
                        </ul>
                    ))
                }
            </div>
        </>
    )
}

export default Home
