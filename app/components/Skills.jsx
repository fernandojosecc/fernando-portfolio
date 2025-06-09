export default function Skills() {
  const skills = [
    'JavaScript',
    'React',
    'Flutter',
    'Tailwind CSS',
    'Firebase',
    'Figma',
    'PostgreSQL',
    'Python',
    'Git',
    'UI Design',
    'UX Research',
    'Responsive Design',
    'No-Code Tools',
    'Leadership',
    'Team Collaboration',
  ];

  return (
    <section className="py-24 px-4 bg-white flex flex-col items-center">
      <h2 className="w-full max-w-5xl text-[38px] font-satoshi font-medium text-left mb-12">Skills</h2>

      <div className="max-w-5xl flex flex-wrap justify-start gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="text-[18px] font-satoshi bg-[#3F6C88] text-white px-4 py-2  rounded-[8px] text-sm font-medium shadow-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
