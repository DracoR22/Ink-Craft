'use client'

import { ReactNode } from "react"
import { RoomProvider } from "../../liveblocks.config"
import { ClientSideSuspense } from "@liveblocks/react";

interface Props {
    children: ReactNode;
    roomId: string;
    fallback: NonNullable<ReactNode> | null
}

const Room = ({ children, roomId, fallback }: Props) => {
    return (
        <RoomProvider id={roomId} initialPresence={{}}>
            <ClientSideSuspense fallback={<div>loading...</div>}>
                {() => children}
            </ClientSideSuspense>
        </RoomProvider>
    )
}

export default Room
