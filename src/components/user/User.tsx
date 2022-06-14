import React from 'react'
import { NavLink } from 'react-router-dom'
import { Avatar, Icon } from '@mondra/ui-components'

export interface IUserProps {
  id: string
  name: string
  website: string
  email: string
}

export function User({ id, name, website, email }: IUserProps) {
  return (
    <div className="flex px-4 py-2 rounded space-x-2 bg-white">
      <Avatar singleChar name={name} />
      <div className="flex flex-1 items-center justify-between">
        <div className="flex flex-col space-y-1">
          <NavLink to={`/users/${id}`}>
            <h3 className="text-sm font-medium text-purple-700">{name}</h3>
          </NavLink>
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noreferrer"
            className="inline-block text-primary-800 text-xs"
          >
            {website}
          </a>
        </div>
        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noreferrer"
          className="inline-block text-primary-600 hover:text-primary-900 text-xs font-semibold"
        >
          <Icon type="email" className="text-current" />
        </a>
      </div>
    </div>
  )
}
