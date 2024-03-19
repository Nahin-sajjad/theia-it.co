import Card from "./Card";
function Services() {
  return (
    <div className="container services">
        <h2 className="main-title text-center">SERVICES</h2>
        <div className="card-cover">
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Web Application Development" img="card1.png" text="TheiaTech creates innovative, robust web application tailored to unique business needs, ensuring seamless, secure, and efficient digital solutions. " />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="E-Commerce Services" img="card2.png" text="Our team offers comprehensive e-commerce solutions with seamless shopping experiences and utilizes ML for enhanced customer interaction." />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cyber Security" img="card3.png" text="Protecting digital assets through security assessments, advanced measures like encryption, and vigilant monitoring to combat evolving cyber threats." />
                    </div>                   
                    <div className="col-md-4 mb-2">
                    <Card title="AI Chatbot" img="card3.png" text="Specializing in AI chatbots, TheiaTech leverages ML for dynamic, self-improving customer interaction, driving engagement and operational gains" />
                    </div>
                    <div className="col-md-4 mb-2">
                    <Card title="Cloud Solution" img="card3.png" text="TheiaTech provides scalable, secure cloud solutions across AWS, Azure, IBM, DigitalOcean, optimizing operations and driving digital transformation with tailored services" />
                    </div>

                </div>
            </div>
        </div>
    </div>
  );
}
export default Services;
