function About() {
  return (
    <>
      <div style={{marginTop:'15rem',width:'100%',height:'10px'}} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src="./img/img1.png" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
            TheiaTech specializes in transforming businesses through innovative technology solutions. 
            With expertise in AI, cloud services, and cybersecurity, we empower organizations to navigate the digital landscape confidently.
            Our tailored approach ensures scalability, security, and efficiency, driving growth and innovation. 
            At TheiaTech, we're not just consultants; we're your strategic tech allies..
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
