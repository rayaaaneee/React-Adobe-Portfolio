export const Title = ({ text, index = null, id = null }) => {

    if (text === null) throw new Error("You must provide a text for the title component.");

    return (
      <div className={`title ${index && `t${index}`}`} id={id}>
          <p>
              {text}
          </p>
      </div>
    )
    
}
