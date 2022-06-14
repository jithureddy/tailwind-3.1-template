import React from 'react'
import { Outlet } from 'react-router-dom'
import { useUsers } from 'api/useUsers'
import { User } from 'components/user/User'

interface IUserProps {
  id: string
  name: string
  website: string
  email: string
}

export default function Users() {
  const { data: users, error } = useUsers()
  if (!users) return <div>Loading</div>
  if (error) return <div>Error occured please try again</div>
  return (
    <div className="flex items-start">
      <div className="flex-1">
        {users &&
          users.map((user: IUserProps) => (
            <React.Fragment key={user.id}>
              <User id={user.id} name={user.name} website={user.website} email={user.email} />
            </React.Fragment>
          ))}
      </div>
      <div className="min-w-[300px]">
        <Outlet />
      </div>
    </div>
  )
}
