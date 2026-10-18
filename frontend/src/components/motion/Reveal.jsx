import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Reveal = ({ children, delay = 0, y = 32, once = true, amount = 0.2, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, amount }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  y: PropTypes.number,
  once: PropTypes.bool,
  amount: PropTypes.number,
  className: PropTypes.string,
};

export default Reveal;
