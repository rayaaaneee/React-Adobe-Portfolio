import { forwardRef } from "react";


export const PageFlow = forwardRef(({ title = null, id, className, children = <></> }, ref = undefined) => {
    return (
        <>
            <div className="title t1" id="firstmid">
                <p>{ title }</p>
            </div>
            <article id={id || ''} className={className || ''} ref={ref}>
                { children }
            </article>
        </>
    );
});
