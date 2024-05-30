const Home = () => {
  return (
    <div id="home" className="home">
        <div className="box1">
            <div>
                <div className="user">
                    <img src="/img/user.png" alt="" />
                </div>
                <h1 className="title">
                    Hi, I &apos;m <span>Ruto</span>
                </h1>
                <p className="desc">
                    I am a passionate web developer with superb skills that enables me to convert beatiful web designs 
                    into dynamic web applications. I have both front-end and backend skills that will easily integrate me
                    into full-stack web development.
                </p>
            </div>
            <div className="contact">
                <div className="icon-list">
                    <span className="user-icon"><ion-icon name="document-outline"></ion-icon></span> <span>Full-Stack Web developer</span>
                </div>
                <div className="icon-list">
                    <span className="user-icon"><ion-icon name="mail-outline"></ion-icon></span> <span>ruto365@gmail.com</span>
                </div>
                <div className="icon-list">
                    <span className="user-icon"><ion-icon name="location-outline"></ion-icon></span> <span>Nairobi, Kenya</span>
                </div>
            </div>
        </div>
        <div className="box2">
            <img src="/img/profile.png" alt="profile" />
        </div>
    </div>
  )
}

export default Home