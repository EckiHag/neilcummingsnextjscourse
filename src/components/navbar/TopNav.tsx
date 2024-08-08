// "use client"

// import { useState } from "react"
// import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
// import Link from "next/link"
// import { PiAxe } from "react-icons/pi"
// import { HiOutlineMenu, HiX } from "react-icons/hi"
// import NavLink from "./NavLink"

// export default function TopNav() {
//   const [menuOpen, setMenuOpen] = useState(false)

//   return (
//     <Navbar maxWidth="xl" className="bg-gradient-to-r from-green-400 to-green-700 relative">
//       <NavbarBrand as={Link} href="/" className="flex items-center">
//         <PiAxe size={40} className="text-gray-200 pr-2" />
//         <div className="font-bold text-3xl flex">
//           <span className="text-gray-900">Eckis</span>
//           <span className="text-gray-200">App</span>
//         </div>
//       </NavbarBrand>
//       <div className="md:hidden flex items-center">
//         <button onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <HiX size={30} className="text-white" /> : <HiOutlineMenu size={30} className="text-white" />}</button>
//       </div>
//       <div className={`md:flex ${menuOpen ? "flex" : "hidden"} w-full md:w-auto flex-col md:flex-row md:items-center`}>
//         <NavbarContent justify="center" className="flex flex-col md:flex-row md:items-center">
//           <NavLink href="/members" label="Matches" />
//           <NavLink href="/lists" label="Lists" />
//           <NavLink href="/messages" label="Messages" />
//           <NavLink href="/news" label="News" />
//         </NavbarContent>
//         <NavbarContent justify="end" className="hidden md:flex flex-col md:flex-row md:items-center">
//           <Button as={Link} href="/login" variant="bordered" className="text-white">
//             Login
//           </Button>
//           <Button as={Link} href="/register" variant="bordered" className="text-white">
//             Register
//           </Button>
//         </NavbarContent>
//       </div>
//       {/* Panel for mobile view */}
//       {menuOpen && (
//         <div className="absolute top-0 left-0 w-3/4 h-full bg-green-600 flex flex-col p-4 md:hidden">
//           <NavLink href="/members" label="Matches" />
//           <NavLink href="/lists" label="Lists" />
//           <NavLink href="/messages" label="Messages" />
//           <NavLink href="/news" label="News" />
//           <Button as={Link} href="/login" variant="bordered" className="text-white mt-2">
//             Login
//           </Button>
//           <Button as={Link} href="/register" variant="bordered" className="text-white mt-2">
//             Register
//           </Button>
//         </div>
//       )}
//     </Navbar>
//   )
// }

import { Button, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react"
import Link from "next/link"
import React from "react"
import { PiAxe } from "react-icons/pi"
import NavLink from "./NavLink"

export default function TopNav() {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-green-400 to-green-700"
      classNames={{
        item: ["text-xl", "text-white", "uppercase", "data-[active=true]:text-yellow-200"],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <PiAxe size={40} className="text-gray-200 pr-2" />
        <div className="font-bold text-3xl flex">
          <span className="text-gray-900">Eckis</span>
          <span className="text-gray-200">App</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />
        <NavLink href="/lists" label="Lists" />
        <NavLink href="/messages" label="Messages" />
        <NavLink href="/news" label="News" />
      </NavbarContent>
      <NavbarContent justify="end">
        <Button as={Link} href="/login" variant="bordered" className="text-white">
          Login
        </Button>
        <Button as={Link} href="/register" variant="bordered" className="text-white">
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  )
}
