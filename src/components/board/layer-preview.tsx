'use client'

import { memo } from "react"
import { useStorage } from "../../../liveblocks.config"
import { LayerType } from "@/types/canvas"
import Rectangle from "./layer-rectangle"
import { Ellipse } from "./layer-ellipse"
import Text from "./selection-text"

interface Props {
    id: string
    onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void
    selectionColor?: string
}

const LayerPreview = memo(({ id, onLayerPointerDown, selectionColor }: Props) => {

    const layer = useStorage((root) => root.layers.get(id))

    if (!layer) {
        return null
    }

    switch (layer.type) {
        case LayerType.Text: 
            return (
                <Text id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}/>
            )
        case LayerType.Ellipse:
            return (
                <Ellipse id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}/>
            )
        case LayerType.Rectangle:
            return (
                <Rectangle id={id} layer={layer} onPointerDown={onLayerPointerDown} selectionColor={selectionColor}/>
            )
            default: 
                console.warn('Unknown layer type')
                return 
    }
})

LayerPreview.displayName = 'LayerPreview'

export default LayerPreview
