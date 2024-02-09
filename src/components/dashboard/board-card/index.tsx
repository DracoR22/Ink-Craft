'use client'

import Image from "next/image"
import Link from "next/link"
import Overlay from "./overlay"

import { formatDistanceToNow } from "date-fns"
import { useAuth } from "@clerk/nextjs"
import Footer from "./footer"

interface Props {
    id: string
    title: string
    authorName: string
    authorId: string
    createdAt: number
    imageUrl: string
    orgId: string
    isFavorite: boolean
}

const BoardCard = ({ authorId, authorName, createdAt, id, imageUrl, isFavorite, orgId, title }: Props) => {

    const { userId } = useAuth()

    const authorLabel = userId === authorId ? 'You' : authorName
    const createdAtLabel = formatDistanceToNow(createdAt, {
        addSuffix: true
    })

    return (
        <Link href={`/board/${id}`}>
           <div className="group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden">
              <div className="relative flex-1 bg-sky-50">
                 <Image src={imageUrl} alt={title} fill className="object-fit"/>
                 <Overlay/>
              </div>
              <Footer isFavorite={isFavorite} title={title} authorLabel={authorLabel} createdAtLabel={createdAtLabel}
              onClick={() => {}} disabled={false}/>
           </div>
        </Link>
    )
}

export default BoardCard
