const Home = () => {
  return (
    <div id="home" className="home">
        <div className="box1">
            <div>
                <div className="user">
                    icon
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
                <div>
                    <i>icon</i> <span>Frond-end developer</span>
                </div>
                <div>
                    <i>icon</i> <span>ruto365@gmail.com</span>
                </div>
                <div>
                    <i>icon</i> <span>Nairobi, Kenya</span>
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