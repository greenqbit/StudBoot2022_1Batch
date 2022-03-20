// We need createStore, connect, and Provider:
import { connect } from "react-redux";

// This mapStateToProps function extracts a single
// key from state (user) and passes it as the `user` prop
const mapStateToProps = (state) => ({
    user: state.user
})
// connect() UserAvatar so it receives the `user` directly,
// without having to receive it from a component above

// could also split this up into 2 variables:
//   const UserAvatarAtom = ({ user, size }) => ( ... )
//   const UserAvatar = connect(mapStateToProps)(UserAvatarAtom);

export const UserAvatar = connect(mapStateToProps)(
    ({ user, size }) => (
        <img
            className={`user-avatar ${size || ""}`}
            alt="user avatar"
            src={user.avatar}
        />
    )
)

export const UserStats = connect(mapStateToProps)(({ user }) => (
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
))