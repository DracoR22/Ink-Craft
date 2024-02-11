'use client'

import { useQuery } from "convex/react"
import Info from "./info"
import Participants from "./participants"
import Toolbar from "./toolbar"

interface Props {
    boardId: string
}

const Canvas = ({ boardId }: Props) => {

    return (
        <main className="h-full w-full relative bg-white touch-none">
           <Info boardId={boardId}/>
           <Participants/>
           <Toolbar/>
        </main>
    )
}

export default Canvas
