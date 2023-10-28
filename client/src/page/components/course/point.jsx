import { forwardRef } from "react"

export const Point = forwardRef(({ semester, key }, ref) => {
    return (
        <div ref={ ref } className="point-container" datadate={ semester.formatStartingDate() } key={ key }>
            <div className="point"></div>
        </div>
    )
})