'use client'

import { ReactNode } from "react"
import { RoomProvider } from "../../liveblocks.config"
import { ClientSideSuspense } from "@liveblocks/react";
import { Loading } from "./board/loading";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";

interface Props {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null
}

const Room = ({ children, roomId, fallback }: Props) => {
    return (
        <RoomProvider id={roomId} initialPresence={{ cursor: null, selection: [], pencilDraft: null, penColor: null }}
         initialStorage={{
            layers: new LiveMap<string, LiveObject<Layer>>(),
            layerIds: new LiveList()
         }}>
            <ClientSideSuspense fallback={<Loading/>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default Room
