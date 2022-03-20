import React from "react";
import {UserContext} from "./App";

//Consumer children will be always function +>
export const UserAvatar = ({ size }) => (
    <UserContext.Consumer>
        {user => (
            <img
                className={`user-avatar ${size || ""}`}
                alt="user avatar"
                src={user.avatar}
            />
        )}
    </UserContext.Consumer>
);

export const UserStats = () => (
    <UserContext.Consumer>
        {user => (
            <div className="user-stats">
                <div>
                    <UserAvatar user={user} />
                    {user.name}
                </div>
                <div className="stats">
                    <div>{user.followers} Followers</div>
                    <div>Following {user.following}</div>
                </div>
            </div>
        )}
    </UserContext.Consumer>
);