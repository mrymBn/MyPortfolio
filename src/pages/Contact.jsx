import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 px-6 md:px-12 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          className="bg-white rounded-xl shadow-md p-8 md:p-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">Let's Work Together</h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-600 mb-8"
          >
            Have a project in mind or want to discuss potential opportunities? I'd love to hear about it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <a 
                href="mailto:contact@maryeem.dev" 
                className="text-lg text-indigo-600 hover:text-indigo-800 hover:underline"
              >
                contact@maryeem.dev
              </a>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Connect</label>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map((platform, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ y: -2 }}
                    href="#"
                    className="text-indigo-600 hover:text-indigo-800"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}