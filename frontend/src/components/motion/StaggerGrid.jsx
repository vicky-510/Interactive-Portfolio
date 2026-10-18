import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export const StaggerGrid = ({ children, className, once = true, amount = 0.15 }) => (
  <motion.div
    className={className}
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once, amount }}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className }) => (
  <motion.div className={className} variants={itemVariants}>
    {children}
  </motion.div>
);

StaggerGrid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  once: PropTypes.bool,
  amount: PropTypes.number,
};

StaggerItem.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
