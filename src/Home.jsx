import './style.css';
import UserCard from './UserCard';
import user from './users';
function Home(props){
    return(
        <div className="container">
             <h1> User at acme Inc. </h1>
             <div className="card-container">
                {
                user.map((elem)=>{
                    console.log(elem);
                    return <UserCard name={elem.name.title +" "+elem.name.first+" "+elem.name.last} email={elem.email} picture={elem.picture.medium}/>
                })
                }
             </div>
            
        </div>
       
    )
}

export default Home;