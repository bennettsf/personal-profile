import profilepic from './profilepic.jpg'

export default function Profile() {
    return (
        <div id='myprofile'>
            <img id='profilepic' src={profilepic} alt='profile pic'></img>
            <p>
                Hello, my name is Bennett!
            </p>
        </div>
    )
}