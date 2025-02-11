import Ranga from "../../assets/team/ranga.png";
import Ravichandran from "../../assets/team/ravichandran.png";
import Shijith from "../../assets/team/ShijithChand.jpeg";
import Sreeram from "../../assets/team/sreeram.jpg";

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
      description: `Shijith Chand (Shijith) has over two decades in IT with a focus on Insurance, including roles as a Technical Consultant for Indian and SE Asian clients. He’s an accomplished Technical Wizard, known for developing frameworks for code transformation, including legacy COBOL to Java. Shijit holds a B.E. in Electronics from NIT, Allahabad.`,
      image: Shijith,
    },
    {
      name: "Sreeram Ranganathan",
      title: "Principal Consultant - Business & IT Solutions",
      description: `Sreeram Ranganathan (Sree) has over 30+ years of experience in Life & Health Insurance Domains. As an Independent Consultant, Sree was part of multiple Life Insurance Offices and IT Companies in the US, UK, Canada and Singapore. In the past, Sree was part of LIC, ING & Mastek in India and DXC Technologies & China Life Insurance in Singapore. Sree is a Commerce graduate and an Associate of Insurance Institute of India. He holds a diploma in OOPs and Windows Programming from IIT Kharagpur, a certified professional in Program in Leading and Managing (PLAM) from IIM Calcutta and Practical Product Management™ from Pragmatic Institute, USA.`,
      image: Sreeram,
    },
  ];

  return (
    <section
      id="Team"
      className="container mx-auto py-12 px-6 lg:px-16 bg-gray-50 dark:bg-gray-900 rounded-lg shadow-lg"
    >
      <h2 className="text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-10">
        Our Team
      </h2>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-2">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
          >
            <img
              src={member.image || "default-image-path.png"}
              alt={`${member.name} Image`}
              className="w-full h-80 object-contain"
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
