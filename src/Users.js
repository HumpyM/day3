import UserData from './users.json';
import UserInfo from './UserInfo';

export default function Users() {
    return(
        <div>
            {UserData.map((user,id) => (
                <div key={id}>
                    <li>{user.username}</li>
                    
                </div>
                   
            ))}
            <table>
                <tr>
                    <th>Serial</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>NAme(FirstName, LastName)</th>
                    <th>Phone Number</th>
                </tr>
                {UserData.map((user,id) =>(
                    <UserInfo id={user.id} email={user.email} username={user.username} firstname={user.name.firstname} lastname={user.name.lastname} phone={user.phone} />
                ))}
            </table>
        </div>
    )
}