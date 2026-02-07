import { useRef } from 'react'
import { motion } from 'framer-motion'

export default function FinalMessage() {
  const sectionRef = useRef(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-950 via-rose-950 to-black flex items-center justify-center px-4 py-16">
      <motion.div
        ref={sectionRef}
        className="max-w-lg w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
      >
        {/* Decorative top */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.div
            className="inline-block text-4xl mb-4"
            animate={{
              rotate: [0, -10, 10, -5, 5, 0],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            🌹
          </motion.div>
        </motion.div>

        {/* Main card */}
        <motion.div
          variants={itemVariants}
          className="glass-strong rounded-3xl p-8 md:p-10 text-center"
        >
          {/* Title */}
          <h2 className="font-script text-3xl md:text-4xl text-rose-200 mb-6">
            A message for you
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="h-px w-16 bg-gradient-to-r from-transparent to-rose-400/50" />
            <span className="text-rose-400 text-xs">✦</span>
            <span className="h-px w-16 bg-gradient-to-l from-transparent to-rose-400/50" />
          </div>

          {/* Quote */}
          <motion.div
            variants={itemVariants}
            className="mb-8"
          >
            <p className="font-serif text-lg md:text-xl text-rose-100 italic leading-relaxed">
              "When the whole world walked away,
            </p>
            <p className="font-serif text-lg md:text-xl text-rose-100 italic leading-relaxed mt-1">
              you were the only one who stayed,
            </p>
            <p className="font-serif text-lg md:text-xl text-rose-100 italic leading-relaxed mt-1">
              believed in me, and never let go.
            </p>
            <p className="font-serif text-lg md:text-xl text-rose-100 italic leading-relaxed mt-2">
              Thank you for being my strength,{' '}
              <span className="font-script text-2xl md:text-3xl text-rose-300 not-italic">
                Nandani
              </span>
              "
            </p>
          </motion.div>

          {/* Decorative hearts */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center gap-3 text-rose-400/60"
          >
            {['♥', '♥', '♥'].map((h, i) => (
              <motion.span
                key={i}
                className="text-sm"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 1, 0.4] }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                {h}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center mt-8"
        >
          <p className="font-sans text-xs text-rose-400/40 tracking-wider">
            Made with ❤️ just for you, Nandani
          </p>
        </motion.div>
      </motion.div>
    </div>
  )
}
