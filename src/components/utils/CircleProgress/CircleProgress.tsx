import { motion } from 'framer-motion'
import './CircleProgress.style.scss'

export interface CircleProgressProps {
  nbMax: number // la stat a son maximum
  nb: number // la stat du pokemon en question
  color1: string
  color2: string
  width: number
  height: number
  animationDelay?: number
  children?: React.ReactNode
};

const CircleProgress: React.FC<CircleProgressProps> = ({ nbMax, nb, color1, color2, width, height, animationDelay, children }) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: () => {
      let delay: number = 1

      if (animationDelay) delay = 1 + animationDelay * 0.5

      return {
        pathLength: nb / nbMax,
        opacity: 1,
        transition: {
          pathLength: { delay, type: 'spring', duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      }
    }
  }

  return (
        <div className="circle-progress" style={{ width, height }}>
            <div className="outer">
                <div className="inner">
                    {children}
                </div>
            </div>
            <svg className="progress-bar" viewBox={`0 0 ${width} ${height}`} xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id={`GradientColor-${color1}-${color2}`}>
                        <stop offset={'0%'} stopColor={color1}/>
                        <stop offset={'100%'} stopColor={color2}/>
                    </linearGradient>
                </defs>
                <motion.circle
                    cx={width / 2}
                    cy={height / 2}
                    r={(width / 2) * 0.9}
                    stroke={`url(#GradientColor-${color1}-${color2})`}
                    strokeWidth={(width / 2) * 0.2}
                    variants={draw}
                    initial={'hidden'}
                    animate={'visible'}
                    custom={1}
                />
            </svg>
        </div>
  )
}

export default CircleProgress
