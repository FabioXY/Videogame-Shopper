import { VideogamesContext} from '../context/VideogameContext'
import { useContext } from 'react'

export const useVideogamesContext = () => {
    const context = useContext(VideogamesContext)

    if(!context){
        throw Error('CotextError')
    }

    return context 
}