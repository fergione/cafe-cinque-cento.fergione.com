import { motion } from 'framer-motion';

// src/pages/Resume.jsx
import resumeConfig from '../config/resumeConfig';

function Resume() {
  return (
    <div className="bg-zinc-900 rounded-3xl p-12">
      <h1 className="text-4xl font-bold mb-8">Resume</h1>
      {resumeConfig.map((section, idx) => (
        <div key={idx} className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
          {section.items.map((item, subIdx) => (
            <div key={subIdx} className="mb-6">
              {item.title && (
                <h3 className="text-xl font-medium text-white">{item.title}</h3>
              )}
              {item.subtitle && (
                <p className="text-zinc-400">{item.subtitle}</p>
              )}
              {item.bullets && item.bullets.length > 0 && (
                <ul className="list-disc list-inside mt-2 text-zinc-400">
                  {item.bullets.map((point, bulletIdx) => (
                    <li key={bulletIdx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Resume;
