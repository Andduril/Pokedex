import { BugIcon, DarkIcon, DragonIcon, ElectricIcon, FairyIcon, FightingIcon, FireIcon, FlyingIcon, GhostIcon, GrassIcon, GroundIcon, IceIcon, NormalIcon, PoisonIcon, PsychicIcon, RockIcon, SteelIcon, WaterIcon } from '../SVG/TypesIcons'
import './PokemonTypeIcon.style.scss'

export interface PokemonTypeIconProps {
  typeName: string
};

const getIcon = (name: string) => {
  switch (name) {
    case 'bug':
      return <BugIcon/>
    case 'dark':
      return <DarkIcon/>
    case 'dragon':
      return <DragonIcon/>
    case 'electric':
      return <ElectricIcon/>
    case 'fairy':
      return <FairyIcon/>
    case 'fighting':
      return <FightingIcon/>
    case 'fire':
      return <FireIcon/>
    case 'flying':
      return <FlyingIcon/>
    case 'ghost':
      return <GhostIcon/>
    case 'grass':
      return <GrassIcon/>
    case 'ground':
      return <GroundIcon/>
    case 'ice':
      return <IceIcon/>
    case 'normal':
      return <NormalIcon/>
    case 'poison':
      return <PoisonIcon/>
    case 'psychic':
      return <PsychicIcon/>
    case 'rock':
      return <RockIcon/>
    case 'steel':
      return <SteelIcon/>
    case 'water':
      return <WaterIcon/>
  };
}

const PokemonTypeIcon: React.FC<PokemonTypeIconProps> = ({ typeName }) => {
  return (
        <div className={`type-icon ${typeName}`}>
            {getIcon(typeName)}
        </div>
  )
}

export default PokemonTypeIcon
