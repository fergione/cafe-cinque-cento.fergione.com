import { motion } from 'framer-motion';

function Blog() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      className="min-h-screen bg-black text-white flex justify-center items-start"
    >
      <div className="w-full max-w-[800px] p-8">
        <div className="bg-zinc-900 rounded-3xl p-12">
          <h1 className="text-4xl font-bold mb-6">Blog</h1>
          <div className="space-y-8">
            <article className="border-b border-zinc-800 pb-8">
              <h2 className="text-2xl font-semibold mb-2">Blog Post Title</h2>
              <p className="text-zinc-400 mb-4">
                Preview of the blog post content...
              </p>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500">January 1, 2024</span>
                <button className="text-blue-400 hover:text-blue-300">Read More →</button>
              </div>
            </article>
            {/* Add more blog posts as needed */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;