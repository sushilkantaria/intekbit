import whyHireUsData from '../../data/home/whyHireUs';

const WhyHireUsSection = () => {
  return (
    <section className="pb-16 px-5 bg-gray-200 text-center">
      <h2
        className="text-4xl mb-16 font-bold leading-snug 
      "
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <span className="text-5xl bg-gradient-to-br from-cyan-400 via-blue-500 to-fuchsia-500 bg-clip-text text-transparent drop-shadow-lg">
          Why Hire Us
        </span>
      </h2>

      <div className="flex justify-center flex-wrap gap-10 max-w-[1200px] mx-auto">
        {whyHireUsData.map((step, index) => (
          <div
            className="flex-1 min-w-[250px] max-w-[250px] p-8 bg-gray-200 rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
            key={index}
            data-aos="zoom-in"
            data-aos-delay={100 * index}
            data-aos-duration="800"
          >
            <div className="text-4xl text-fuchsia-600 mb-5">
              {step.icon && <step.icon />}
            </div>
            <div>
              <h3 className="text-lg mb-2 text-gray-800 font-semibold">
                {step.title}
              </h3>
              <p className="text-base text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyHireUsSection;
