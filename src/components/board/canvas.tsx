'use client'

import Info from "./info"
import Participants from "./participants"
import Toolbar from "./toolbar"

interface Props {
    boardId: string
}

const Canvas = ({ boardId }: Props) => {
    return (
        <main className="h-full w-full relative bg-white touch-none">
           <Info/>
           <Participants/>
           <Toolbar/>
        </main>
    )
}

export default Canvas
