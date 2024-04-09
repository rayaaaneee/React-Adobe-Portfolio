import { forwardRef } from "react"

export const Point = forwardRef(({ semester }, ref) => {
    return (
        <div ref={ ref } className="point-container" datadate={ semester.formatStartingDate() } >
            <div className="point"></div>
        </div>
    )
})