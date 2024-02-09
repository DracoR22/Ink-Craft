'use client'

import EmptyBoards from "./empty-boards"
import EmptyFavorites from "./empty-favorites"
import EmptySearch from "./empty-search"

interface Props {
    orgId: string
    query: {
        search?: string
        favorites?: string
    }
}

const BoardList = ({ orgId, query }: Props) => {

    const data = [] // Change to API call

    if (!data.length && query.search) {
        return (
            <EmptySearch/>
        )
    }

    if (!data?.length && query.favorites) {
        return (
            <div>
               <EmptyFavorites/>
            </div>
        )
    }

    if (!data?.length) {
        return (
            <div>
                <EmptyBoards/>
            </div>
        )
    }

    return (
        <div>
            
        </div>
    )
}

export default BoardList
