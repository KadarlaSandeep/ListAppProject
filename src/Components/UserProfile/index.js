import './index.css'
const UserProfile = (props) => {
    const {userDetails,onDeleteChange} = props;
    const {imageUrl,name,role,uniqueNo} = userDetails;
    const onDelete = () => {
      onDeleteChange(uniqueNo)
    }
    return (
    <li className = "Container-style">
      <div className='card'>
        <img src = {imageUrl} alt = "avatar" className = "avatar"/>
        <div>
            <h1 className='Name'>{name}</h1>
            <p className='Role'>{role}</p>
        </div>
        <button className="delete-button" onClick = {onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          alt="cross"
          className="delete-img"
        />
      </button>
        </div>
    </li>
)}
export default UserProfile