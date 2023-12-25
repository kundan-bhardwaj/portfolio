import { motion } from 'framer-motion'
import './css/progress.css'
export default function Progress(props) {
    
    return (
        <div id='chip'>
            <div id='marks'>
                <motion.div animate={{
                    width: `${props.value}%`
                }} transition={{
                    duration: 0.5
                }} id='obtained'></motion.div>
            </div>
            &nbsp;{props.value}%
        </div>
    )
}
