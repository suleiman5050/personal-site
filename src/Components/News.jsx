import React from "react";

const News = () => {
  return (
    <section className="section news">
      <div className="news-header">
        <h2>Latest Articles</h2>
      </div>
      <div className="news-center">
        <article className="main-news">
          <div className="news-container">
            <img className="big-image" src="./src/assets/news1.jpg" alt="" />
            <span className="date">08 July,2023</span>
          </div>
          <div className="news-desc">
            <h4 className="news-title">
              Our Connected Future: The Next Era of Logistics & Supply Chains
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
              voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
            </p>
            <div className="news-btn">Read More</div>
          </div>
        </article>
        <article className="main-news">
          <div className="news-container">
            <img className="big-image" src="./src/assets/news2.jpg" alt="" />
            <span className="date">08 July,2023</span>
          </div>
          <div className="news-desc">
            <h4 className="news-title">
              Unfair EU rules to hit SA orange exports, say growers
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
              voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
            </p>
            <div className="news-btn">Read More</div>
          </div>
        </article>
        <article className="main-news">
          <div className="news-container">
            <img src="./src/assets/news6.jpg" alt="" />
            <span className="date">08 July,2023</span>
          </div>
          <div className="news-desc">
            <h4 className="news-title">
              Nigeria, Mexico sign deal to stabilize, grow Hibiscus
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
              voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
            </p>
            <div className="news-btn">Read More</div>
          </div>
        </article>
        {/* <div className="small-news"> */}
        {/* <article className="small-news-article">
            <div className="small-news-container">
              <img src="./src/assets/news3.jpg" alt="" />
              <span className="small-date">08 July,2023</span>
            </div>
            <div className="small-news-desc">
              <h4 className="small-news-title">Lorem ipsum dolor sit.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
                voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
              </p>
              <div className="small-news-btn">Read More</div>
            </div>
          </article> */}

        {/* <article className="small-news-article">
            <div className="small-news-container">
              <img src="./src/assets/news5.jpg" alt="" />
              <span className="small-date">08 July,2023</span>
            </div>
            <div className="small-news-desc">
              <h4 className="small-news-title">Lorem ipsum dolor sit.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
                voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
              </p>
              <div className="small-news-btn">Read More</div>
            </div>
          </article>
          <article className="small-news-article">
            <div className="small-news-container">
              <img src="./src/assets/news6.jpg" alt="" />
              <span className="small-date">08 July,2023</span>
            </div>
            <div className="small-news-desc">
              <h4 className="small-news-title">Lorem ipsum dolor sit.</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Voluptates, nobis? Tenetur maiores ipsa at quaerat velit
                voluptates, perspiciatis quidem ratione ipsum fugiat sunt?
              </p>
              <div className="small-news-btn">Read More</div>
            </div>
          </article> */}
        {/* </div> */}
      </div>
    </section>
  );
};

export default News;
