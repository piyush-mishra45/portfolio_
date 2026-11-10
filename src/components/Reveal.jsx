import { motion } from 'framer-motion'
// Scroll reveal wrapper.
export default function Reveal({ children, className = '' }) {
  return (
    <motion.div className={className} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.5 }}>
      {children}
    </motion.div>
  )
}
