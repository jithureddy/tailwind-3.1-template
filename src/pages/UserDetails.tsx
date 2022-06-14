import React from "react";
import { useParams } from 'react-router-dom'
import { useUser } from "api/useUser";
import { User } from "components/user/User";

export default function UserDetails() {
	const { userId }: any = useParams()
  const { data: user, error } = useUser(userId);
  if (!user) return <div>Loading</div>;
  if (error) return <div>Error occured please try again</div>;
  return (
    <div>
      <User {...user} />
    </div>
  );
}
