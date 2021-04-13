import { motion } from 'framer-motion';

const Blob = () => {
  return (
    <div
      style={{
        width: '70rem',
        height: '70rem',
        backgroundColor: '#ffa0a3',
        borderRadius: '10% 70% 10% 30% / 10% 50% 10% 70%',
        zIndex: '-9',
      }}
    >
      <motion.circle
        style={{ position: 'absolute' }}
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{
          ease: 'easeInOut',
          duration: 2,
          flip: Infinity,
          repeatDelay: 5,
        }}
      ></motion.circle>
    </div>
  );
};
export default Blob;
