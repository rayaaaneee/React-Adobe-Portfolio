export const Music = ({ link, key }) => {
    return (
        <iframe key={ key } className="animate" allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
        frameborder="0" height="175" 
        style={{ maxWidth: '500px',overflow: 'hidden', background: 'transparent' }} 
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" 
        src={ link }>
        </iframe>
    )
}