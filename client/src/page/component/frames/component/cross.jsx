import '../../../asset/scss/general/cross.scss';

export const ButtonType = Object.freeze({
    close: 'close',
    print: 'print',
    download: 'download',
    info: 'info'
})

export const CrossTheme = Object.freeze({
    red: 'red',
    grey: 'grey',
    angular: 'angular'
});

export const Cross = ({ 
    type = ButtonType.close, 
    crossTheme = null, 
    className = null, 
    onClick = (_) => {}, 
    title 
}) => {

    if (type === ButtonType.close && !crossTheme) throw new Error('You must provide a theme for the close button type.');
    if (type !== ButtonType.close && crossTheme) throw new Error('You cannot provide a theme for a button type other than close.');

    return (
        <div 
			title={ title }
			className={`quit-button 
                ${ type }
                ${ type === ButtonType.close && `${crossTheme}` } 
                ${ className }
            `}
			onClick={ onClick }>
		</div>
    )
}
