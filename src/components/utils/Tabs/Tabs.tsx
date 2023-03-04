import React, { useState } from 'react'
import './Tabs.style.scss'

import type TabElement from './TabElement/TabElement'

export interface PokemonTabsProps {
  children: Array<React.ReactElement<typeof TabElement>>
};

const Tabs: React.FC<PokemonTabsProps> = ({ children }) => {
  const tabs = children
  const [activeTab, setActiveTab] = useState<React.ReactElement<typeof TabElement>>(tabs[0])

  const setTab = (newTab: React.ReactElement<typeof TabElement>) => {
    setActiveTab(newTab)
  }

  return (
        <div id="Tabs">
            <ul className="tabs-nav">
                {tabs.map((element, index) => (
                    <li
                        className={element === activeTab ? 'active' : undefined}
                        key={index} onClick={() => { setTab(element) }}
                    >
                        {element.props.name}
                    </li>
                ))}
            </ul>
            <div className="tabs-out">
                {activeTab}
            </div>
        </div>
  )
}

export default Tabs
