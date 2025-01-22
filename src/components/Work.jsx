import { EXPERIENCES } from "../constants"


const Work = () => {
    return (
      <section id="experience" className="py-12">
        <h2 className="my-16 text-center text-4xl lg:text-8xl">Work Experience</h2>
        <div className="mx-auto max-w-6xl space-y-16">
          {EXPERIENCES.map((exp, id) => (
            <div key={id} className="mx-6 lg:mx-10 space-y-6">
              <h2 className="font-medium lg:text-3xl">{exp.company}</h2>
              <div className="flex flex-col lg:flex-row lg:justify-between space-y-4 lg:space-y-0">
                <p className="tracking-wide lg:text-xl">{exp.role}</p>
                <p className="lg:text-xl text-gray-500">{exp.year}</p>
              </div>
              <p className="font-sans text-gray-500 lg:text-lg">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  

  

export default Work