import whyHireUsData from '../../data/home/whyHireUs';

const WhyHireUsSection = () => {
  return (
    <section className="py-20 px-5 bg-gray-200 text-center">
      <h2 className="text-4xl mb-16 font-bold leading-snug">
        <span className="bg-gradient-to-r from-[#7f00ff] to-[#e100ff] bg-clip-text text-transparent">
          Easy and Streamlined
        </span>{' '}
        <br />
        Collaboration Process
      </h2>

      <div className="flex justify-center flex-wrap gap-10 max-w-[1200px] mx-auto">
        {whyHireUsData.map((step, index) => (
          <div
            className="flex-1 min-w-[250px] max-w-[250px] p-8 bg-white rounded-xl shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2"
            key={index}
          >
            <div className="text-4xl text-[#7f00ff] mb-5">
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
