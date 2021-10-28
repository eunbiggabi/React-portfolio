import { useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>  
            <Sidebar isOpen = { isOpen } toggle = { toggle }/>
            <Navbar toggle = { toggle }/>    
        </>
    )
}

