import { Code2, Database, Cloud, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">About Me</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about backend architecture and building scalable systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-blue-500/50 text-center backdrop-blur-sm transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(59,130,246,0.3)]" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-blue-500/30">
                <Code2 className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Clean Code</h3>
              <p className="text-gray-400 text-sm">
                Writing maintainable and well-documented code following best practices and SOLID principles.
              </p>
            </div>
          </div>

          <div className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-purple-500/50 text-center backdrop-blur-sm transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(168,85,247,0.3)]" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-purple-500/30">
                <Database className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Data Solutions</h3>
              <p className="text-gray-400 text-sm">
                Designing efficient database schemas and optimizing queries for high-performance applications.
              </p>
            </div>
          </div>

          <div className="group relative bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:border-green-500/50 text-center backdrop-blur-sm transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity shadow-[0_0_20px_rgba(34,197,94,0.3)]" />
            
            <div className="relative">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <Cloud className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-white">Cloud Architecture</h3>
              <p className="text-gray-400 text-sm">
                Building and deploying scalable applications on AWS with focus on reliability and cost-efficiency.
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gray-900/50 rounded-xl p-8 border border-gray-800 backdrop-blur-sm mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl" />
          <p className="relative text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
            I'm a backend developer specializing in Java and Spring Boot, with a passion for creating 
            robust and scalable systems. My expertise lies in designing RESTful APIs, implementing 
            microservices architectures, and optimizing database performance. I enjoy tackling complex 
            technical challenges and continuously learning new technologies to deliver high-quality solutions. 
            With full-stack experience, I understand the entire development lifecycle and can collaborate 
            effectively across teams to build exceptional products.
          </p>
        </div>

        {/* Education Section */}
        <div className="relative">
          <div className="text-center mb-8">
            <div className="relative inline-block mb-4">
              <div className="absolute inset-0 bg-blue-500/20 rounded-xl blur-xl" />
              <div className="relative w-12 h-12 bg-gray-900 rounded-xl flex items-center justify-center border border-gray-800">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-white mb-2">Education</h3>
          </div>

          <div className="relative bg-gray-900/50 rounded-xl p-6 sm:p-8 border border-gray-800 backdrop-blur-sm max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl" />
            <div className="relative text-center">
              <h4 className="text-xl font-semibold text-white mb-2">
                Computer Programming
              </h4>
              <p className="text-blue-400 font-mono mb-2">Seneca College</p>
              <p className="text-gray-400 text-sm">Toronto, Canada</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}