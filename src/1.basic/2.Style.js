import './2.style.css'

const user = {
    username: 'heday',
    faceImgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    faceImgSize: 90
}
 
export default function Main() {
    return (
        <> {/* fragment   JSX문법이기때문에 이와같이{}로묶어야 js코드로인식한다.*/}
            <h1>{user.username}</h1>
            <img className='avatar'
                src={user.faceImgUrl}
                style={{ 
                    width: user.faceImgSize,
                    height: user.faceImgSize
                }}/>
        </>
    )
}