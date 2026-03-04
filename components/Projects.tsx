import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    name: 'E-Commerce REST API',
    description: 'Scalable RESTful API for e-commerce platform with order management, payment integration, and inventory tracking. Handles 10K+ requests per minute.',
    tags: ['Java', 'Spring Boot', 'PostgreSQL', 'AWS'],
    github: 'https://github.com/ProgJES/payments-poc/',
    liveDemo: 'https://demo.example.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A selection of recent projects showcasing backend development and full-stack capabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 transition-all duration-300 backdrop-blur-sm flex flex-col"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_30px_rgba(59,130,246,0.3)]" />
              
              <div className="relative flex flex-col h-full">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors mb-3">
                  {project.name}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-gray-800/80 text-gray-300 rounded-full border border-gray-700 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800/80 text-gray-300 rounded-lg hover:bg-gray-800 hover:text-white border border-gray-700 hover:border-gray-600 transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <Github className="w-4 h-4" />
                    GitHub
                  </a>
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white rounded-lg hover:from-blue-500 hover:to-purple-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all flex items-center justify-center gap-2 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}