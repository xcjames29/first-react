function UserCard(props){
    console.log(props);
    return(
        <div className="card">
            <img src={props.picture} alt=""/>
            <div className="text">
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    )
}

export default UserCard;