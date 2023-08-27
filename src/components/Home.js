const Home = ({ name, paragraph }) => {
  return (
    <div className="homeContainer">
      <div className="homeHeadWrapper">
        <h1>
          Hi, I'm <br />
          <span> {name}. </span>
        </h1>
        <p>{paragraph} </p>
      </div>
      <div className="imageContainer">temp image</div>
    </div>
  );
};
export default Home;
