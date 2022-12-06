import PropTypes from 'prop-types';
import css from "./Profile.module.css"


export const Profile = ({username, tag, location, avatar, stats:{followers, views, likes} }) => {
return (
    <div className={css.profile}>
        <div className={css.profile_description}>
            <img 
            src={avatar}
            alt="User avatar"
            className={css.profile_avatar}
            width="300"
            />
            <p>{username}</p>
            <p>{tag}</p>
            <p>{location}</p>
        </div>
        <ul className={css.profile_stats}>
            <li className={css.profile_item}>
            <span>Followers</span>
            <span>{followers}</span>
            </li>

            <li className={css.profile_item}>
            <span >Views</span>
            <span >{views}</span>
            </li>

            <li className={css.profile_item}>
            <span>Likes</span>
            <span>{likes}</span>
            </li>
        </ul>
    </div>
)
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats:PropTypes.objectOf(PropTypes.number)
    
}