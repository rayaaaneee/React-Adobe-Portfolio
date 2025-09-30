import { forwardRef } from 'react'

export const BaseFrame = forwardRef(({ children, className = null }, ref) => {
    return (
        <div ref={ ref } className={`base-frame ${className}`}>
			<div className="frame-page-content">
				<div className='background-frame-page'></div>
				<div className='parts'>
                    { children }
                </div>
            </div>
        </div>
    );
});
