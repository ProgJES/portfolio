const technologies = [
  { name: 'Java', category: 'Backend' },
  { name: 'Spring Boot', category: 'Backend' },
  { name: 'React', category: 'Frontend' },
  { name: 'AWS', category: 'Cloud' },
  { name: 'PostgreSQL', category: 'Database' },
  { name: 'Docker', category: 'DevOps' },

  { name: 'JavaScript', category: 'Frontend' },
  { name: 'TypeScript', category: 'Frontend' },
  { name: 'jQuery', category: 'Frontend' },
  { name: 'Thymeleaf', category: 'Frontend' },

  { name: 'REST APIs', category: 'Backend' },
  { name: 'Apache Solr', category: 'Backend' },

  { name: 'MySQL', category: 'Database' },
  { name: 'Oracle DB', category: 'Database' },
  { name: 'DynamoDB', category: 'Database' },

  { name: 'GitHub', category: 'DevOps' },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Tech Stack</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to build robust and scalable applications.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="group relative px-6 py-3 bg-gray-900/50 rounded-xl border-2 border-gray-800 hover:border-blue-500/50 transition-all duration-300 shadow-sm backdrop-blur-sm"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur-sm" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.4)]" />
              
              <div className="relative flex flex-col items-center gap-1">
                <span className="font-semibold text-white font-mono">{tech.name}</span>
                <span className="text-xs text-gray-500">{tech.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
