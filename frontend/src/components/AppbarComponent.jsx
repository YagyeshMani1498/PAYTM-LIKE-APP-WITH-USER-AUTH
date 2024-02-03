/* eslint-disable react/prop-types */
export function AppBarComponent({user}){
    return (
        <>
        <div className="app-bar">
            <h2>Paytm App</h2>
            <div className="user">
                <p className="hello-user">Hello,</p>
                <p className="user-name">{user}</p>
                <span className="user-icon">{user[0]}</span>
            </div>
        </div>
        </>
    )
}