'use client'

import { cn } from "@/lib/utils"
import { Plus } from "lucide-react"
import { api } from "../../../convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface Props {
    orgId: string
    disabled?: boolean
}

const NewBoardButton = ({ orgId, disabled }: Props) => {

    const { mutate, pending } = useApiMutation(api.board.create)

    const router = useRouter()

    const onClick = () => {
        mutate({
            orgId,
            title: 'Untitled'
        })
        .then((id: string) => {
            toast.success('Board created')
            router.push(`/board/${id}`)
        })
        .catch(() => toast.error('Failed to create board'))
    }

    return (
        <button disabled={disabled || pending} onClick={onClick} className={cn('col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6',
        (disabled || pending) && 'opacity-75 hover:bg-blue-600 cursor-not-allowed')}>
           <div />
           <Plus className="h-12 w-12 text-white stroke-1"/>
           <p className="text-xs text-white font-light mt-1">
              New board
           </p>
        </button>
    )
}

export default NewBoardButton
