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
