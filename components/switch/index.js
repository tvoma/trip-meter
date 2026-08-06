import { useId } from 'react'
import styles from './styles.module.css'

export default function Switch({ role, className,checked, onChange, label, disabled = false }) {
    const id = useId()

    const handleToggle = () => {
        if (disabled) return
        onChange(!checked)
    }

    const handleKeyDown = (e) => {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            handleToggle()
        }
    }

    return (
        <div className={ styles.wrapper + " " + className } role={ role }>
            {label && (
                <label
                    htmlFor={ id }
                    className={`${styles.label} ${disabled ? styles.disabled : ""}`}>
                    { label }
                </label>
            )}

            <button
                id={ id }
                type='button'
                role='switch'
                aria-checked={ checked }
                aria-disabled={ disabled }
                disabled={ disabled }
                onClick={ handleToggle }
                onKeyDown={ handleKeyDown }
                className={`${styles.track} ${checked ? styles.checked : ""} ${ disabled ? styles.disabled : ""}`}>
                <span className={styles.thumb} />
            </button>
        </div>
    )
}
