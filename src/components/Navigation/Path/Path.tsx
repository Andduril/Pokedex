import { motion } from 'framer-motion'

const Path = ({ ...props }) => {
  return (
        <motion.path
            fill="transparent"
            strokeWidth="3"
            stroke="#fff"
            strokeLinecap="round"
            {...props}
        />
  )
}

export default Path
