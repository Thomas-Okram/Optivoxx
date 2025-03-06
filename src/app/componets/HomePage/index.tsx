import { faqData, promoItems, servicesData, testimonialData } from "@/app/data";
import dynamic from "next/dynamic";

// Dynamically import components
const HeroSection = dynamic(() => import("./HeroSection"));
const ContentSection1 = dynamic(() => import("./ContentSection1"));
const ContentSection2 = dynamic(() => import("./ContentSection2"));
const PromoSection = dynamic(() => import("./PromoSection"));
const ServicesSection = dynamic(() => import("./ServicesSection"));
const TextSlider = dynamic(() => import("./TextSlider"));
const FaqSection = dynamic(() => import("./FaqSection"));
const TestimonialSection = dynamic(() => import("./TestimonialSection"));
const CtaSection = dynamic(() => import("./CtaSection"));
const InputEmail = dynamic(() => import("./InputEmail"));

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="Empowering Businesses & Youth with Cutting-Edge Software Solutions"
        description="Transform your business with innovative software solutions. Our team of experts provides tailored solutions that accelerate growth. Additionally, we educate the next generation of IT professionals with industry-relevant skills, ensuring a seamless transition into high-demand tech careers."
        ctaText="Start Your Transformation Today"
        ctaLink="#services"
      />

      {/* Promo Section */}
      <PromoSection items={promoItems} />

      {/* Education Platform Section */}
      <ContentSection1
        title="Unlock Your Future with Our IT Career Training"
        imageSrc="/images/education.jpg"
        description1="Our platform empowers students with the latest tech skills needed in today's competitive job market. Whether you’re just starting out or looking to upskill, we help you pave your path to success."
        description2="100% job assistance is provided, and you can even start earning before you finish the course with our unique 'Pay after Placement' model. Only pay once you land a job!"
        ctaText="Explore Our Courses"
        ctaLink="#courses"
      />

      {/* Separator */}
      <div className="global-container overflow-hidden">
        <div className="h-[1px] w-full bg-[#363636]" />
      </div>

      {/* Services Section */}
      <ServicesSection services={servicesData} />

      {/* Text Slider Section (optional for keywords) */}
      <div className="global-container">
        <TextSlider
          bulletPoints={[
            "#BusinessSolutions",
            "#SoftwareDevelopment",
            "#CareerTraining",
            "#TechCareers",
            "#JobAssistance",
          ]}
        />
      </div>

      {/* IT Solutions for Businesses Section */}
      <ContentSection2
        title="Tailored Software Solutions for Your Business"
        description="We work with businesses to understand their unique challenges and provide custom software solutions that drive growth. From automating processes to providing real-time insights, we help you stay ahead of the competition."
        imageSrc="/images/software01.jpg"
        imageAlt="content-img-2"
        bulletPoints={[
          "Custom Software Development",
          "AI-Powered Business Insights",
          "Real-Time Data Analytics",
          "Business Process Automation",
        ]}
        imagePosition="right"
      />

      {/* Separator */}
      <div className="global-container overflow-hidden">
        <div className="h-[1px] w-full bg-[#363636]" />
      </div>

      {/* Testimonials Section */}
      <TestimonialSection
        title="What Our Clients & Students Are Saying"
        trustpilotLink="https://your-trustpilot-link.com"
        testimonials={testimonialData}
      />

      {/* FAQ Section */}
      <FaqSection title="Have Questions? We Have Answers." faqs={faqData} />

      {/* Call to Action Section */}
      <CtaSection
        ctaText="Ready to Take Your Career or Business to the Next Level?"
        ctaLink="#contact"
        buttonText="Get Started Today"
      />

      {/* Email Capture Section */}
      <InputEmail />
    </div>
  );
}
