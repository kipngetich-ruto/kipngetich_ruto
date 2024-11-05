const About = () => {
  return (
    <div className="about" id="about">
        <div className="box3">
            <img src="/profile2.png" alt="profile" />
        </div>
        <div className="about-main">
            <div className="salute">
                {/* <span>Get to Know me</span> */}
            </div>
            <div className="">
                <h2 className="title">About Me </h2>
                <p className="desc">
                   Hello! My name is Kipngetich Ruto from Nairobi, Kenya. My journey as web developer has been met 
                   with a lot of ups and downs. I studied Mathematics and Coputer Science in college where I first developed
                   the interest on web development. Because of my humble background, I didn&apos;t have a laptop and had to be
                   using computer labs for my learning. This proved to be tough since it was not always convenient because I 
                   was not suppose to install any software in the labs. After college, I had to take a different route so that 
                   I could be able to make a living while working towards my goal as a web developer. While working as a cashier, I obtained
                   a laptop and was able to proceed learning after work. After about 3 years, I left the cashier job and began  working as a freelancer.
                   Since then, i have been a freelancer and recently felt that I can be able to work
                   full-time in an organization set-up and I am actively looking for a job.
                </p>
            </div>
            <div className="social">
                <a href="https://www.linkedin.com/in/kipngetich-ruto-196733120/" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="https://github.com/kipngetich-ruto" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="https://twitter.com/ruto365" target="_blank" rel="noreferrer">
                    <ion-icon name="logo-twitter"></ion-icon>
                </a>
            </div>
        </div>
    </div>
  )
}

export default About