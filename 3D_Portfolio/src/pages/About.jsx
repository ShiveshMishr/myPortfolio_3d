import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';


import { skills, experiences } from '../constants';
import CTA from '../components/CTA';

const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text font-semibold drop-shadow'>Shivesh</span>
      </h1>
      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          Software Engineer based in India, specializing in technical education thorugh hand on learning and building applications.
        </p>
      </div>
      

        <div className='py-10 flex flex-col'>
          <h3 className='subhead-text'>
            Myskill
          </h3>

          <div className='mt-16 flex flex-wrap gap-12'>
            {skills.map((skill) => (
              <div className='block-container w-20 h-20'>
                <div className='btn-back rounded-xl'/>
                <div className='btn-front rounded-xl flex justify-center items-center'>
                  <img 
                    src={skill.imageUrl}
                    alt={skill.name}
                    className='w-1/2 h-1/2 object-contain'
                  />
                </div>
              </div>
            ))}
          </div>

        </div>

      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>
          "In my current academic phase, my practical experiences revolve around collaborative group projects and activities, where I gained invaluable insights into teamwork, leadership, and project management. These endeavors at college have been pivotal in shaping my skills, especially in languages and other proficiencies crucial for excelling in a professional environment. I've showcased these learnings through certifications, emphasizing my dedication and investment in acquiring knowledge essential for contributing meaningfully to esteemed organizations like yours."
        </p>
      </div>
      <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[100%] h-[100%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p
                    className='text-black-500 font-medium text-base'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                  <div>
                    {experience.image}
                  </div>
                </div>

                {/* <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-black-500/50 font-normal pl-1 text-sm'
                      
                    >
                      {point}
                    </li>
                  ))}
                </ul> */}
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className='border-slate-200' />

      <CTA/>
    </section>
  );
};

export default About;