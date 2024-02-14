export default function UserProfile({name, email}){


    return (
        <div>
            <div className="profile-card">
                <h2>User Profile</h2>
                <img src="https://example.com/user-photo.jpg" alt="User Photo" class="photo"/>
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <a href="mailto:jane.doe@example.com">Send Email</a>
            </div>
        </div>
    )


}