import background from '../assets/photo_1.jpg';
const Content = () => {
  return (
    <div className="content">
      <div className="container">
        <div className="main-content">
          <div className="welcome">
            <h1>WELCOME</h1>
            <span></span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            facilis placeat odio architecto maiores, sequi similique ipsa
            inventore nostrum saepe officiis a nemo dicta nihil fuga voluptates
            eos delectus amet.
            <div className="button">
              <a href="/">LEARN MORE</a>
            </div>
          </div>
          <div className="design">
            <div
              className="picture"
              style={{ backgroundImage: `url(${background})` }}
            ></div>
            <div className="text">
              <h1>UI/UX DESIGN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis rem autem dicta quaerat eos qui dolor eum sed,
                reprehenderit neque. Atque distinctio consequatur, accusamus
                dolorem quis dignissimos qui quam iste!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Corporis rem autem dicta quaerat eos qui dolor eum sed,
                reprehenderit neque. Atque distinctio consequatur, accusamus
                dolorem quis dignissimos qui quam iste!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
