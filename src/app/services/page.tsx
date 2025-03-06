import ContentSection1 from "../componets/HomePage/ContentSection1";
import ContentSection2 from "../componets/HomePage/ContentSection2";

export default function ServicePage() {
  return (
    <div className="container mx-auto px-4 py-12 mt-24 bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white">
      {/* Gradient background for the futuristic effect */}

      {/* Service 1 - Custom Software Development */}
      <ContentSection1
        title="Custom Software Development"
        imageSrc="/images/software-development.jpg"
        description1="We provide tailored software development solutions designed to fit your business needs. Whether it’s web, mobile, or desktop applications, we ensure seamless integration and user-friendly interfaces that enhance your business processes."
        description2="Our team is dedicated to delivering high-quality, efficient, and scalable software solutions to help your business grow and innovate."
        ctaText="Get In Touch"
        ctaLink="#contact"
      />

      {/* Service 2 - IT Career Training */}
      <ContentSection1
        title="IT Career Training"
        imageSrc="/images/it-career-training.jpg"
        description1="Our IT career training programs equip students with industry-relevant skills needed to thrive in the fast-paced tech world. With 100% job assistance, our platform allows students to learn and earn, offering a 'Pay after Placement' model."
        description2="Learn from experienced instructors and get hands-on experience with real-world projects."
        ctaText="Learn More"
        ctaLink="#contact"
      />

      {/* Service 3 - AI & Data Analytics */}
      <ContentSection2
        title="AI & Data Analytics"
        imageSrc="/images/ai-data-analytics.jpg"
        description="Harness the power of artificial intelligence and data analytics to drive informed decision-making. We provide businesses with AI-powered insights, real-time data processing, and automation tools to streamline operations and gain a competitive edge."
        imageAlt="AI and Data Analytics"
        bulletPoints={[
          "AI-Powered Insights",
          "Real-Time Data Processing",
          "Automation Tools",
          "Business Intelligence",
        ]}
        imagePosition="right"
        ctaText="Contact Us for AI Solutions" // Custom CTA button text
        ctaLink="#contact" // Custom CTA button link
      />

      {/* Service 4 - IT Consulting */}
      <ContentSection2
        title="IT Consulting"
        imageSrc="/images/it-consulting.jpg"
        description="Our expert IT consultants offer strategic advice to help your business optimize technology infrastructure, reduce costs, and implement scalable IT solutions that align with your long-term goals."
        imageAlt="IT Consulting"
        bulletPoints={[
          "Scalable IT Solutions",
          "Business Optimization",
          "Strategic IT Advice",
          "Cost Reduction",
        ]}
        imagePosition="left"
        ctaText="Get IT Consulting Now" // Custom CTA button text
        ctaLink="#contact" // Custom CTA button link
      />
    </div>
  );
}
