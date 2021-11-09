import { history } from './../Store';

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="header">
          <h1>
            SERVICES
            <span></span>
          </h1>
          <div className="button">
            <a
              onClick={() => {
                history.push('/Home');
                history.goForward();
              }}
            >
              BACK
            </a>
          </div>
        </div>
        <div className="text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate autem exercitationem fugit minima aliquam soluta porro
            dolorem, nemo ullam voluptatem dolor repellat obcaecati? Aliquid
            nemo minima rerum eveniet modi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia at alias ratione voluptatem
            nam laudantium magni, deleniti perspiciatis, nesciunt nobis itaque.
            Consectetur sed quod tempora consequuntur dicta eius rem vero?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quisquam animi explicabo dignissimos corrupti, porro fugiat vero
            consectetur quasi, sit eveniet labore optio mollitia! Placeat ab
            veritatis laboriosam enim aperiam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate autem exercitationem fugit minima aliquam soluta porro
            dolorem, nemo ullam voluptatem dolor repellat obcaecati? Aliquid
            nemo minima rerum eveniet modi Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Delectus deserunt aperiam corrupti
            praesentium assumenda, molestiae, officia quo autem, odio molestias
            perspiciatis voluptatibus reprehenderit soluta magnam repudiandae
            reiciendis consequatur maxime facilis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate autem exercitationem fugit minima aliquam soluta porro
            dolorem, nemo ullam voluptatem dolor repellat obcaecati? Aliquid
            nemo minima rerum eveniet modi. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Officia at alias ratione voluptatem
            nam laudantium magni, deleniti perspiciatis, nesciunt nobis itaque.
            Consectetur sed quod tempora consequuntur dicta eius rem vero?
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            quisquam animi explicabo dignissimos corrupti, porro fugiat vero
            consectetur quasi, sit eveniet labore optio mollitia! Placeat ab
            veritatis laboriosam enim aperiam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            cupiditate autem exercitationem fugit minima aliquam soluta porro
            dolorem, nemo ullam voluptatem dolor repellat obcaecati? Aliquid
            nemo minima rerum eveniet modi Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Delectus deserunt aperiam corrupti
            praesentium assumenda, molestiae, officia quo autem, odio molestias
            perspiciatis voluptatibus reprehenderit soluta magnam repudiandae
            reiciendis consequatur maxime facilis.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Services;
