import './footer.css'
const Footer = () => {
  return(
      <div className={'footer'}>
          <div className={'left'}>
              <p>© 2022 TheMealDB</p>
              <p>Proudly built in the UK </p>
          </div>
          <div className={'center'}>
              <img src="https://www.themealdb.com/images/logo-tcdb.png" alt=""/>
              <img src="https://www.themealdb.com/images/logo-tadb.png" alt=""/>
              <img src="https://www.themealdb.com/images/logo-tsdb.png" alt=""/>
          </div>
          <div className={'right'}>
              <a href="#">about</a>
              <a href="#">faq</a>
              <a href="#">contact</a>
          </div>
      </div>
  )
}
export default Footer