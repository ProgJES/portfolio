"use client";

import { Github, ArrowRight } from 'lucide-react';

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      
      {/* Gradient Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20">
                <span className="text-sm text-blue-400">Available for new opportunities</span>
              </div>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Eunseok Jeon
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 mb-6 font-mono">
              Backend Developer | Java & Spring Boot
            </p>

            <p className="text-lg text-gray-400 mb-10 max-w-2xl leading-relaxed">
              Building scalable backend systems with clean architecture and modern technologies. 
              Passionate about creating robust APIs and efficient data solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button
                onClick={scrollToProjects}
                className="group px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all flex items-center gap-2 shadow-lg"
              >
                View Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="https://github.com/ProgJES"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 border-2 border-gray-700 text-gray-300 rounded-lg hover:border-blue-500 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>

          {/* Right: Code Snippet Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl blur-xl" />
              <div className="relative bg-gray-900/80 border border-gray-800 rounded-xl p-6 backdrop-blur-sm shadow-2xl">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-4 text-xs text-gray-500 font-mono">BackendService.java</span>
                </div>
                <pre className="text-sm text-gray-300 font-mono">
                  <code>
                    <span className="text-purple-400">@RestController</span>{'\n'}
                    <span className="text-purple-400">@RequestMapping</span>(<span className="text-green-400">"/api/v1"</span>){'\n'}
                    <span className="text-blue-400">public class</span> <span className="text-yellow-400">BackendService</span> {'{\n\n'}
                    {'  '}<span className="text-purple-400">@Autowired</span>{'\n'}
                    {'  '}<span className="text-blue-400">private</span> DataRepository repo;{'\n\n'}
                    {'  '}<span className="text-purple-400">@GetMapping</span>(<span className="text-green-400">"/data"</span>){'\n'}
                    {'  '}<span className="text-blue-400">public</span> ResponseEntity getData() {'{\n'}
                    {'    '}<span className="text-blue-400">return</span> repo.findAll();{'\n'}
                    {'  }'}
                    {'\n}'}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
