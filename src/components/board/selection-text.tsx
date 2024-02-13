import { cn, colorToCss } from "@/lib/utils"
import { TextLayer } from "@/types/canvas"
import { Kalam } from "next/font/google"
import ContentEditable, { ContentEditableEvent } from 'react-contenteditable'

const font = Kalam({
    subsets: ['latin'],
    weight: ['400']
})

interface Props {
    id: string
    layer: TextLayer
    onPointerDown: (e: React.PointerEvent, id: string) => void
    selectionColor?: string 
}

const Text = ({ id, layer, onPointerDown, selectionColor }: Props) => {

    const { x, y, width, height, fill, value } = layer

    return (
        <foreignObject x={x} y={y} width={width} height={height} onPointerDown={(e) => onPointerDown(e, id)}
         style={{
            outline: selectionColor ? `1px solid ${selectionColor}` : 'none'
         }}>
            <ContentEditable html="text" onChange={() => {}}
            className={cn('h-full w-full flex items-center justify-center text-center drop-shadow-md outline-none', font.className)}
            style={{
                color: fill ? colorToCss(fill) : '#000'
            }}/>
        </foreignObject>
    )
}

export default Text
