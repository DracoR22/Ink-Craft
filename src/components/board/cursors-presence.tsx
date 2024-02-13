'use client'

import { memo } from "react"
import { useOthersConnectionIds } from "../../../liveblocks.config"
import Cursor from "./cursor"

interface Props {
    
}

const Cursors = () => {
    const ids = useOthersConnectionIds()

    return (
        <>
          {ids.map((connectionId) => (
            <Cursor key={connectionId} connectionId={connectionId}/>
          ))}
        </>
    )
}

const CursorsPresence = memo(() => {
    return (
        <>
        {/* DRAFT PENDIL TODO    */}
         <Cursors/>
        </>
    )
})

CursorsPresence.displayName = "CursorsPresence"

export default CursorsPresence
