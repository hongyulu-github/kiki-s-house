class KikiHouse extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  

  
  render() {
    
    
    return (
      <div id="container">
     <Navbar />
     <Header />
     <About />
     <SpecialMenu />
     <ChefsWord />
     <Gallery />
     <FindUs />
     <Footer />
      </div>
      
    )
    
  } 
  
}

class Navbar extends React.Component {
 
  constructor(props){
    super(props);
    this.state = {
      toggleMenu:false
    }
  }
  

  handleOpenMenu=()=>{
    this.setState({
      toggleMenu:true,
    })
  }

  handleCloseMenu=()=>{
    this.setState({
      toggleMenu:false,
    })
  }

  render() { 
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          Kiki's House
        </div>
        <ul className='app__navbar-links'>
          <li><a className='cairo' href="#home">Home</a></li>
          <li><a className='cairo' href="#about">About</a></li>
          <li><a className='cairo' href="#menu">Menu</a></li>
          <li><a className='cairo' href="#gallery">Gallery</a></li>
          <li><a className='cairo' href="#contact">Contact</a></li>
          
        </ul>
        <div className="app__navbar-login cairo">
        <a href='#login'>Log In / Registration</a>
      
        </div>

        <div className="app__navbar-smallscreen">
        <i className="fa-solid fa-bars" onClick={()=>{this.handleOpenMenu()}}></i>
        
       
        {this.state.toggleMenu &&( 
        <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
        <i className="fa-solid fa-xmark" onClick={()=>{this.handleCloseMenu()}}></i>
       
       
        
        <ul className='app__navbar-smallscreen-links'>
          <li><a className='cairo' href="#">Home</a></li>
          <li><a className='cairo' href="#about">About</a></li>
          <li><a className='cairo' href="#menu">Menu</a></li>
          <li><a className='cairo' href="#galley">Gallery</a></li>
          <li><a className='cairo' href="#contact">Contact</a></li>
        </ul>
        </div>
        )}
        </div>
        
        
      </nav>
    );
  }
}
 

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() { 
    return (
      <div className="app__header app__wrapper section__padding" id="home">
        <div className="app__wrapper_info">
          <SubHeading  title="まちでさいこうのらーめん"/>
          <h1 className="section-title">Best ramen in town.</h1>
          <p className="p-info" style={{margin:"2rem 0"}}>
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus 
          </p>
          <a href="#menu"><button type="button" className="custom__button">Explore Menu</button></a>
          
        </div>
        <div className="app__wrapper_img">
          <img src="./src\david-hunter-xhOkqfXYls8-unsplash.jpg" />
        </div>
      </div>
    );
  }
}
 
class SubHeading extends React.Component {
 
  render() { 
    return (
      <div>
      <p className="subheading" >{this.props.title}</p>
      <img src="./src/spoon.png" />
      </div>
    );
  }
}
 

class About extends React.Component {
  
  render() { 
    return (
      <div className="app__about app__bg flex__center section__padding" id="about">
        <div className="app__about-content-sushi">
          <img src="./src/sushi.png"/>
        </div>

      <div className="app__about-content flex__center">


        <div className="app__about-content-aboutus">
        <h1 className="section-title">About Us</h1>
        <img src="./src/spoon.png" />
        <p className='p-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi voluptates atque eaque odit, error, tenetur praesentium quasi quo incidunt eius dolorum sunt eos natus tempore culpa voluptatum itaque optio fuga adipisci! Blanditiis error eius fugit a at repudiandae, est necessitatibus voluptates, modi nihil iste nam illum minima officiis incidunt.
     </p>
        </div>
      
     

        <div className="app__about-content-ourhistory">
        <h1 className="section-title">Our History</h1>
        <img src="./src/spoon.png" />
        <p className='p-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi voluptates atque eaque odit, error, tenetur praesentium quasi quo incidunt eius dolorum sunt eos natus tempore culpa voluptatum itaque optio fuga adipisci! Blanditiis error eius fugit a at repudiandae, est necessitatibus voluptates, modi nihil iste nam illum minima officiis incidunt.</p></div>
       
      </div>
      </div>
    );
  }
}
 
class SpecialMenu extends React.Component {
  render() { 
    return (
      <div className="app__specialMenu flex__center" id="menu">
        <SubHeading title="Find your passion"/>
        <h1 className="section-title">Today's Special</h1>
        <h2>Menu del Día for 2 people</h2>
        <p className="bold"><i className="fa-solid fa-star"></i><i className="fa-regular fa-star"></i>
         28.99€ with drinks and dessert included 
         <i className="fa-regular fa-star"></i><i className="fa-solid fa-star"></i></p>
        <div className="app__specialMenu-content">
          <div className="app__specialMenu-content-first">
          <h2>The first course to choose from:</h2>
          <ul>
            <li> 
            <h4>TONKOTSU SHIO</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <h4>TONKOTSU SOJA</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <h4>TONKOTSU MISO</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
            <li>
            <h4>TANTANMEN</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>
          </ul>
          </div>
          <div className="app__specialMenu-content-img">
            <img src="./src/bon-vivant-qom5MPOER-I-unsplash-removebg-preview.png"/>
          </div>
          <div className="app__specialMenu-content-second">
          <h2>The second course to choose from:</h2>
            <ul>
              <li>
              <h4>HIYASHI KIMCHI MAZESOBA</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
              <h4>HIYASHICHUKA</h4>
              <p>Lorem ipsum dolor sit amet.</p>
              </li>
              <li>
            <h4>TONKOTSU SHIO</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            </li>

            </ul>
          </div>
          
        </div>
      
      </div>
    );
  }
}

class ChefsWord extends React.Component {

  render() { 
    return (<div className="app__chefsword flex__center">
      <div className="app__chefsword-img">
       <img src="./src/chef.jpg"/>
      </div>
      <div className="app__chefwords-content">
        <SubHeading title="Chef's Word"/>
        <h1 className="section-title">The Best Food Is Made With Heart.</h1>
        <p className='p-info'><i className="fa-solid fa-quote-left"></i>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit minus nesciunt in ducimus iste soluta temporibus esse laudantium fugiat harum nobis veniam molestias culpa placeat, quidem voluptates cupiditate eveniet. Tempora ipsa optio incidunt! Modi libero pariatur perspiciatis? Repellat, maxime.</p>
        <h3>Hongyu Lu</h3>
        <p>Chef & Founder</p>
        <h4>卢泓羽</h4>

      </div>
    </div>);
  }
}

class Gallery extends React.Component {
  
  scroll=(direction)=>{
    const current = document.querySelector(".app__gallery-photosContent_container")
    if(direction ==="left"){
      current.scrollLeft -= 300
    } else{
      current.scrollLeft += 300
    }
    
  }

  render() { 
    return (
      <div className='app__gallery flex__center' id="gallery">
      <div className="app__gallery-textContent">
      <SubHeading title="Deliciously inspired"/>
        <h1 className="section-title">Photo Gallery</h1>
        <p className='p-info'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta, facilis.</p>
        <button className="custom__button">View More</button>
      </div>
      <div className="app__gallery-photosContent">
        <div className="app__gallery-photosContent_container flex__center">
          <img className="app__gallery-photosContent-card" src="./src/gallery/gallery1.jpg" />
          <img className="app__gallery-photosContent-card" src="./src/gallery/gallery2.jpg" />
          <img className="app__gallery-photosContent-card" src="./src/gallery/gallery3.jpg" />
          <img className="app__gallery-photosContent-card" src="./src/gallery/gallery4.png" />
          <img className="app__gallery-photosContent-card" src="./src/gallery/gallery5.png" />

        </div>
        <div className="app__gallery-photosContent_arrows">
        <i className="fa-solid fa-arrow-left galley__arrow-icon" onClick={()=>{this.scroll("left")}}></i>
        <i className="fa-solid fa-arrow-right galley__arrow-icon" onClick={()=>{this.scroll("right")}}></i>
       
        </div>
      </div>
        
      </div>
    );
  }
}

class FindUs extends React.Component {

  render() { 
    return (
      <div className="app__findus flex__center" id="contact">
      <div className="app__findus-info"> 
       <SubHeading title='Contact'/>
        <h1 className="section-title">Find Us</h1>
        <p className="p-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corrupti recusandae odio sint voluptas modi numquam earum reiciendis inventore dolores?</p>
        <h2 className="section-subtitle">Opening Hours</h2>
        <p className="p-info">Wed - Fri : 12:00 AM - 3:00 PM 5:00 PM - 10:30 PM</p>
        <p className="p-info">Sat - Sun : 10:00 AM - 3:00 PM 5:00 PM - 10:30 PM</p>
     </div>
     <div className="app__findus-img"> 
     <img src="./src/paulo-doi-6uTQmtqcAzs-unsplash.jpg" />
     </div>
      </div>
    );
  }
}
 
class Footer extends React.Component {

  render() { 
    return (
      <div className="app__footer">
        <div className="contact-us">
          <h2 className="section-subtitle">Contact Us</h2>
          <p className="p-info">9 W 53rd St, New York, NY 10019, USA</p>
          <p className='p-info'>+1 212-344-1230</p>
          <p className='p-info'>+1 212-355-1230</p>
        </div>
        <div className="info-logo">
          <h1 className='app__navbar-logo'>Kiki's House</h1>
          <p className="p-info">"The best way to find yourself is to lose yourself in the service of others."</p>
         
          <div className="social-media">
            <a href=""><i class="fa-brands fa-instagram"></i></a>
            <a href=""><i class="fa-brands fa-facebook"></i></a>
            <a href=""><i class="fa-brands fa-youtube"></i></a>

          </div>
        </div>
        <div className="WorkingHour">
          <h2 className="section-subtitle">Working Hour</h2>
          <p className='p-info'>Wed - Fri : 12:00 AM - 10:30 PM</p>
          <p className='p-info'>Sat - Sun : 10:00 AM - 10:30 PM</p>
        </div>

      </div>
    );
  }
}
 

 

 

 




 






const root = ReactDOM.createRoot(
  document.getElementById('root')
);

root.render(<KikiHouse />);
