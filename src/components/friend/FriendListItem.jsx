import css from "./FriendList.module.css";

export const FriendListItem = ({avatar,name,isOnline}) => {
    return(
    <>
       {isOnline ? (
        <span className={css.friend_status} width="7" height="7"></span>
      ) : (
        <span className={css.friend_isOnline} width="7" height="7"></span>
      )}
        <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
        <p className={css.name}>{name}</p>
    </>
    )
}

