import React from "react";
import Ranga from "../../assets/team/ranga.png";
import Ravichandran from "../../assets/team/ravichandran.png";
import Shijith from "../../assets/team/ShijithChand.jpeg";

function Team() {
  const teamMembers = [
    {
      name: "Rangarajan Ramanujam",
      title: "Chief Executive Officer (CEO)",
      description: `Rangarajan Ramanujam (Ranga) possesses over three decades of Information Technology (IT) and Core Insurance Business hands-on expertise. Having competently implemented a plethora of transformation projects in the APAC and the US regions, he has worked with major conglomerates like Capgemini, DXC Technologies, IBM, eBao Tech, and MSG Global. He holds qualifications in Corporate Secretaryship, International Law, and an MBA in Finance, with a Certificate in Insurance and Financial Authorities.`,
      image: Ranga,
    },
    {
      name: "Ravichandran V R R",
      title: "Chief Operating Officer (COO)",
      description: `Ravichandran (Ravi) has over two decades of experience in Life Insurance and Pension Operations, holding upper managerial roles across Asia, APAC, and the UK. With expertise in managerial positions in companies like AMP Sanmar, ING Vysya, TCS, and HCL, he is now COO of FuturaInsTech. Ravi is a Computer Science graduate with an MBA in Systems & IT, and holds various certifications such as PMP, CSM®, and Six Sigma Black Belt.`,
      image: Ravichandran,
    },
    {
      name: "Shijith Chand",
      title: "Chief Technology Officer (CTO)",
      description: `Shijith Chand (Shijit) has over two decades in IT with a focus on Insurance, including roles as a Technical Consultant for Indian and SE Asian clients. He’s an accomplished Technical Wizard, known for developing frameworks for code transformation, including legacy COBOL to Java. Shijit holds a B.E. in Electronics from NIT, Allahabad.`,
      image: Shijith,
    },
  ];

  return (
    <section className="container mx-auto py-12 px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg">
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10">
        Our Team
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={member.image}
              alt={`${member.name} Image`}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-primary text-lg font-medium mt-1">
                {member.title}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Team;
