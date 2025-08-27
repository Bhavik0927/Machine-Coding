import React, { useState } from 'react'

const tabs = ({ tabs }) => {
    console.log(tabs);

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div>
            <div style={{ display: 'flex', gap: '0.9rem', marginBottom: '0.9rem' }}>
                {
                    tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveIndex(idx)}
                            style={{
                                padding: '8px 10px',
                                border: '1px solid grey',
                                background: activeIndex === idx ? 'blue' : 'white',
                                color: activeIndex === idx ? 'white' : 'black',
                                cursor: 'pointer'
                            }}
                        >
                            {tab.label}
                        </button>
                    ))
                }
            </div>
            <div style={{padding:'16px',border:'1px solid grey'}}>
                {tabs[activeIndex].content}
            </div>

            <div>

            </div>
        </div>
    )
}

export default tabs;