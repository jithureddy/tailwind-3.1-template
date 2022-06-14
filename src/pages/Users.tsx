import React from "react";
import { Outlet } from "react-router-dom";
import { useUsers } from "api/useUsers";
import { User } from "components/user/User";

export default function Users() {
  const { data: users, error }: any = useUsers();
  if (!users) return <div>Loading</div>;
  if (error) return <div>Error occured please try again</div>;
  return (
    <div className="flex items-start">
			<div className="flex-1">
      {users &&
        users.map((u: any) => (
          <React.Fragment key={u.id}>
            <User {...u} />
          </React.Fragment>
        ))}
				</div>
      <div className="min-w-[300px]"><Outlet /></div>
    </div>
  );
}
