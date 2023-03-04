import { useParams } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import { type Pokemon } from '../../utils/Pokemon'
import { api } from '../../utils/Api'
import './PokemonPage.style.scss'
import { AnimatePresence, motion } from 'framer-motion'
import PokemonSprite from '../../components/PagesParts/PokemonPageParts/PokemonSprite/PokemonSprite'
import PokemonMoves from '../../components/PagesParts/PokemonPageParts/PokemonMoves/PokemonMoves'
import PokemonStats from '../../components/PagesParts/PokemonPageParts/PokemonStats/PokemonStats'
import PokemonTypes from '../../components/PagesParts/PokemonPageParts/PokemonTypes/PokemonTypes'
import Tabs from '../../components/utils/Tabs/Tabs'
import TabElement from '../../components/utils/Tabs/TabElement/TabElement'

const PokemonPage = () => {
  const { pokemonId } = useParams()
  // eslint-disable-next-line
    const { data, error } = useFetch<Pokemon>(api + `pokemon/${pokemonId}`);

  return (
        <div className="pokemonPage">
            {(data != null)
              ? (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PokemonSprite sprites={data.sprites} />
                    <div style={{ display: 'flex', justifyContent: 'space-around', fontWeight: 'bold' }}>
                        <div style={{ width: '50px' }}>
                            <span>{data.height / 10}m</span>
                        </div>
                        <div style={{ textAlign: 'center', margin: 20 }}>
                            <h1 style={{ margin: 0 }}>{data.name}</h1>
                        </div>
                        <div style={{ width: '50px' }}>
                            <span>{data.weight / 10}kg</span>
                        </div>
                    </div>
                    <div style={{ width: '50%' }}>
                        <PokemonTypes types={data.types}/>
                    </div>
                    <Tabs>
                        <TabElement name="stats">
                            <AnimatePresence mode="wait">
                                <motion.div className="stats-tab"
                                    key={'stats-tab'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <PokemonStats stats={data.stats}/>
                                </motion.div>
                            </AnimatePresence>
                        </TabElement>
                        <TabElement name="moves">
                            <AnimatePresence mode="wait">
                                <motion.div className="moves-tab"
                                    key={'moves-tab'}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                >
                                    <PokemonMoves moves={data.moves}/>
                                </motion.div>
                            </AnimatePresence>
                        </TabElement>
                    </Tabs>
                </div>
                )
              : (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <span>Loading...</span>
                </div>
                )}
        </div>
  )
}

export default PokemonPage
