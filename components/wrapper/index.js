import styles from './styles.module.css'

export default function Wrapper({ children, ref }) {
    return (
        <div ref={ ref } className={ styles.wrapper }>
            { children }
        </div>
    )
}
