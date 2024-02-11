import Canvas from "@/components/board/canvas"
import { Loading } from "@/components/board/loading"
import Room from "@/components/room"

interface BoardIdPageProps {
    params: {
        boardId: string
    }
}

const BoardIdPage = ({ params }: BoardIdPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading/>}>
            <Canvas boardId={params.boardId}/>
        </Room>
    )
}

export default BoardIdPage