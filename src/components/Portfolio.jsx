import { portfolio } from './data'
const Portfolio = () => {
  return (
    <div id="portfolio" className="portfolio">
      <h2>
        My Portfolio
      </h2>
      <div className='box-wrap'>
        {portfolio.map((item) => (
          <div className='box' key={item.id}>
            <div className='thumbnail'>
              <a href={item.url} target='_blank'>
                <img src={item.src} alt="" />
              </a>
            </div>
            <div className='content'>
              <div className='sub-title'>
                <a href={item.url} target='_blank'>{item.tech}</a>
              </div>
              <h4 className='title'>
                <a href={item.url} target='_blank'>
                  {item.name}
                </a>
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio