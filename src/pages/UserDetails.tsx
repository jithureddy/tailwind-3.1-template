import React from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from 'api/useUser'
import { User, IUserProps } from 'components/user/User'

export default function UserDetails() {
  const { userId } = useParams()
  const { data: user, error } = useUser(userId)
  if (!user) return <div>Loading</div>
  if (error) return <div>Error occured please try again</div>
  const { id, name, website, email }: IUserProps = user
  return (
    <div>
      <User id={id} name={name} website={website} email={email} />
    </div>
  )
}
