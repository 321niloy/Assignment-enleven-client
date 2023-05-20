import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() =>{
        document.title = `${title}-ToyBangla `
    },[title])
}

export default useTitle;