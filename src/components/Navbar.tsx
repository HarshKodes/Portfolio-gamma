import { useState } from "react"

export default function Navbar() {
    const [active, setActive] = useState("About")
    const tabs = ["Home", "Services", "About", "Skills", "Projects"]

    return (
        <header className="navbar-container">
            <nav className="navbar">
                <ul>
                    {tabs.map(tab => (
                        <li
                            key={tab}
                            className={active === tab ? "active" : ""}
                            onClick={() => setActive(tab)}
                        >
                            {tab}
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}