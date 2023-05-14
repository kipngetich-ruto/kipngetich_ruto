const Home = () => {
  return (
    <div id="home" className="home">
        <div className="box1">
            <div>
                <div className="user">
                    <img src="/img/user.png" alt="" />
                </div>
                <h1 className="title">
                    Hi, I am <span>Ruto</span>
                </h1>
                <p className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat autem eaque 
                    voluptatem laborum molestias facilis possimus voluptates vero nisi quae.
                </p>
            </div>
            <div className="contact">
                <div className="icon-list">
                    <span className="user-icon"><ion-icon name="document-outline"></ion-icon></span> <span>Frond-end developer</span>
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
            <img src="/profile.jpg" alt="profile" />
        </div>
    </div>
  )
}

export default Home