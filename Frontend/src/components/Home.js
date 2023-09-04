import Image from 'react-bootstrap/Image';
const Home = ({ name, paragraph }) => {
  const style = {
    borderStyle: 'solid',
    borderWidth: '5px',
    borderColor: 'black',
    transition: 'transform 0.5s ease',
    width: '24rem',
    height:'auto',
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2)'
    
  }
  return (
    <div className="homeContainer">
      <div className="homeHeadWrapper">
        <h1>
          Hi, I'm <br />
          <span> {name}. </span>
        </h1>
      </div>
      <div className="imageContainer">
        <Image src="assets/self.jpg" alt="Image Description" className='portraitImage' style={style} roundedCircle/>
        </div>
    </div>
  );
};
export default Home;
