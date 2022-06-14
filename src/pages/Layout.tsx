import React from 'react'
import classNames from 'classnames'
import { NavLink, Outlet } from 'react-router-dom'
import { MondraLogo } from 'components/mondra-logo/MondraLogo'

interface InavLinkClasses {
  isActive: boolean
}
const navLinkClasses = ({ isActive }: InavLinkClasses) =>
  classNames(
    'text-indigo-500 font-medium hover:text-primary-600 motion-safe:transition-all',
    isActive && 'text-primary-700 font-semibold'
  )
export default function Layout() {
  return (
    <div className="layout min-h-screen px-8 py-4">
      <div className="flex items-center justify-between w-full px-4 h-16 rounded-lg bg-gray-100  border border-blue-100 shadow-xl shadow-blue-100 sticky top-4 ">
        <div className="text-primary-600">
          <MondraLogo />
        </div>
        <nav className="space-x-4">
          <NavLink to="/" className={navLinkClasses}>
            Dashboard
          </NavLink>
          <NavLink to="/users" className={navLinkClasses}>
            Users
          </NavLink>
        </nav>
      </div>
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  )
}
