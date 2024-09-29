'use client';
import React, {createContext, useContext, useReducer} from 'react';   

const SoundContext = createContext();

function soundReducer(state, action) { 
    switch (action.type) {
        case 'toggle':
            return !state;
    }
}

export function SoundProvider({ children }) {
    const [soundEnabled, dispatch] = useReducer(soundReducer, true);
    return (
        <SoundContext.Provider value={{soundEnabled, dispatch}}>
            {children}
        </SoundContext.Provider>
    )
}

export function useSoundContext() {
    const context = useContext(SoundContext);
    if (context === undefined) {
        throw new Error('useSoundContext must be used within a SoundProvider');
    }
    return context;
}

