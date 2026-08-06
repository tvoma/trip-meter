import { useState, useRef, useEffect } from 'react'
import Switch from '@/components/switch'
import { SETTINGS } from './constant'
import styles from './styles.module.css'

export default function Settings({ values, onChange }) {
    const [open, setOpen] = useState(false)
    const containerRef = useRef(null)

    useEffect(() => {
        if (!open) return

        const handleClickOutside = e => {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false)
            }
        }

        const handleEscape = e => {
            if (e.key === 'Escape') setOpen(false)
        }

        document.addEventListener('mousedown', handleClickOutside)
        document.addEventListener('keydown', handleEscape)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
            document.removeEventListener('keydown', handleEscape)
        }
  }, [open])

    return (
        <div className={ styles.wrapper } ref={ containerRef }>
            <button
                type='button'
                className={`${styles.trigger} ${open ? styles.open : ""}`}
                aria-haspopup='true'
                aria-expanded={open}
                onClick={() => setOpen((prev) => !prev)}>
                Settings
                <svg
                    className={`${styles.chevron} ${open ? styles.open : ""}`}
                    viewBox='0 0 20 20'
                    fill='none'
                    aria-hidden='true'>
                    <path
                        d='M5 7.5L10 12.5L15 7.5'
                        stroke='currentColor'
                        strokeWidth='1.6'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                    />
                </svg>
            </button>

            {open && (
                <div className={styles.menu} role='menu'>
                    {SETTINGS.map(({ key, label }) => (
                        <Switch
                            key={ key }
                            role='menuitem'
                            className={ styles.item }
                            label={ label }
                            checked={ values[key] }
                            onChange={ (checked) => onChange(key, checked) }
                        />
                    ))}
                </div>
            )}
        </div>
    )
}
