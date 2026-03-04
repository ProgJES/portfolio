import { Briefcase } from 'lucide-react';

const experiences = [
  {
    id: 1,
    role: 'Fullstack Developer',
    company: 'Biddingo',
    dateRange: 'July 2022 - Jan 2026',
    responsibilities: [
        'Designed backend and full-stack features using Java, Spring Boot, Angular, and AWS to support billing and vendor workflows in a production SaaS environment.',
        'Architected recurring subscription and transaction-based payment workflows with retry logic and state management to ensure payment reliability and data integrity.',
        'Resolved production issues related to payment states and backend workflows, restoring service stability and preventing recurrence.',
        'Built a dynamic form builder with configurable schema generation and flexible data modeling, enabling runtime changes without database redeployment.',
        'Optimized backend APIs and database queries to improve response consistency and system reliability under production load.',
        'Deployed and monitored AWS services (EC2, S3, WAF), troubleshooting production incidents and supporting CI/CD releases.',
    ],
  },
  {
    id: 2,
    role: 'Web Application Developer',
    company: 'Milal Church',
    dateRange: 'Feb 2018 - Dec 2018',
    responsibilities: [
        'Designed and built a full-stack membership management system serving ~2,000 users, migrating manual workflows into a structured digital platform.',
        'Implemented dynamic search, CRUD operations, and relational data mapping to support administrative reporting and record management.',
        'Developed conditional filtering and export functionality to streamline internal data analysis and operational tasks.',
    ],
  },
  {
    id: 3,
    role: 'Software Development Tutor',
    company: 'Seneca College',
    dateRange: 'Sept 2016 - Apr 2017',
    responsibilities: [
        'Delivered instruction on core computer science fundamentals including object-oriented programming, database concepts, and systems programming using C, C++, and C#.',
        'Provided one-on-one tutoring and group sessions to support students in understanding programming concepts and problem-solving techniques.',
        'Assisted students during lab sessions by troubleshooting code issues and guiding them through practical programming exercises.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="relative inline-block mb-6">
            <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl" />
            <div className="relative w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center border border-gray-800">
              <Briefcase className="w-8 h-8 text-purple-400" />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Experience</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Professional journey building scalable backend systems and leading technical projects.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="group relative bg-gray-900/50 rounded-xl p-6 sm:p-8 border border-gray-800 hover:border-blue-500/50 backdrop-blur-sm transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
              
              <div className="relative">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-lg text-blue-400 font-mono">{exp.company}</p>
                  </div>
                  <div className="px-4 py-1.5 bg-gray-800/60 rounded-lg border border-gray-700 w-fit">
                    <span className="text-sm text-gray-400 font-mono">{exp.dateRange}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((responsibility, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 leading-relaxed">
                      <span className="text-blue-400 mt-1.5 flex-shrink-0">▹</span>
                      <span>{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}