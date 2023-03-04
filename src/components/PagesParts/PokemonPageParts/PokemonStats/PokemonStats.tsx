import { type PokemonStat } from '../../../../utils/Pokemon'
import CircleProgress from '../../../utils/CircleProgress/CircleProgress'

export interface PokemonStatsProps {
  stats: PokemonStat[]
};

const getStatColors = (statName: string): { color1: string, color2: string } => {
  const colors: { color1: string, color2: string } = { color1: '#fff', color2: '#fff' } // default
  switch (statName) {
    case 'hp':
      colors.color1 = '#539b4e'
      colors.color2 = '#1aef0a'
      break
    case 'attack':
      colors.color1 = '#9b4e9b'
      colors.color2 = '#ef0a22'
      break
    case 'defense':
      colors.color1 = '#664e9b'
      colors.color2 = '#0a86ef'
      break
    case 'special-attack':

      colors.color1 = '#9b984e'
      colors.color2 = '#efd50a'
      break
    case 'special-defense':
      colors.color1 = '#653064'
      colors.color2 = '#ff00e4'
      break
    default: // speed
      colors.color1 = '#595959'
      colors.color2 = '#d1d1d1'
  };

  return colors
}

const minimizeName = (name: string): string => {
  if (name === 'special-attack') {
    return 'sp. Atk'
  };

  if (name === 'special-defense') {
    return 'sp. Def'
  }

  return name
}

const PokemonStats: React.FC<PokemonStatsProps> = ({ stats }) => {
  return (
        <ul className="stats-list">
            {stats.map((value, index) => {
              const colors = getStatColors(value.stat.name)
              return (
                    <li className="stat-container" key={index}>
                        <CircleProgress
                            width={120}
                            height={120}
                            color1={colors.color1}
                            color2={colors.color2}
                            nb={value.base_stat}
                            nbMax={255}
                            animationDelay={index / 2}
                        >
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: 'bold' }}>{value.base_stat}</span>
                                <span>{minimizeName(value.stat.name)}</span>
                            </div>
                        </CircleProgress>
                    </li>
              )
            })}
        </ul>
  )
}

export default PokemonStats
