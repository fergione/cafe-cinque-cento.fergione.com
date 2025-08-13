import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="min-h-screen bg-black text-white flex justify-center items-start"
    >
      <div className="w-full max-w-[800px] p-8">
        <div className="bg-zinc-900 rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-6">Projects</h1>
          <div className="grid gap-8">
            <div className="project-card">
              <h2 className="text-2xl font-semibold mb-2">Project Name</h2>
              <p className="text-zinc-400 mb-4">
                Description of the project and its key features.
              </p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-zinc-800 rounded-full text-sm">Node.js</span>
              </div>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Projects;