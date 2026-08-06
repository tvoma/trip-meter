export default function useSettings() {
    const [displayElevation, setDisplayElevation] = useState(false)
    const [displaySpeed, setDisplaySpeed] = useState(false)
    const setters = { setDisplayElevation, setDisplaySpeed }

    return { displayElevation, displaySpeed, setters }
}
