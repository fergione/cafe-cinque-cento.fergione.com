// src/components/Layout.jsx
/*
Implents a back button, and a smooth transition
*/
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -16 }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        className="min-h-screen bg-black text-white flex justify-center items-start"
      >
        <div className="w-full max-w-[800px] p-8">
          {!isHome && (
            <motion.button
              onClick={() => navigate(-1)}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              transition={{ duration: 0.3 }}
              className="mb-6 px-4 py-2 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700"
            >
              ← Back
            </motion.button>
          )}
          <main>{children}</main>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

