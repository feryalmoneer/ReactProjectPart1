import "./Hero.css";
export default function Hero() {
  return (
    <div className="Hero">
      <div className="container-Hero">
        <div className="row">
          <div className="col-md-6">
            <div className="copy col-8">
              <div className="Text  lobster-regular ">
                {" "}
                Hi! Welcome to IKEA Store
              </div>

              <div className="text-hero-bold">
                furniture, home accessories, design ideas and inspiration for
                big dreams and small budgets. A better everyday life begins at
                home{" "}
              </div>

              <div className="cta">
                <a href="#" className="btn  btn-light shadow-none">
                  {" "}
                  Explore Now
                </a>{" "}
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <img src="IKEAsofa.jpg" alt="Hero-Img" />
          </div>
        </div>
      </div>
    </div>
  );
}
