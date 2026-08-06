import { useState } from 'react'

export default function useSettings() {
    const [settings, setSettings] = useState({
        elevation: false,
        direction: false,
        speed: false,
    })
      
    const handleSettingChange = (key, value) => {
        setSettings((prev) => ({ ...prev, [key]: value }));
    }

    return { settings, handleSettingChange }
}
