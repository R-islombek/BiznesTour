import './Button.css'


function Button({title,bg,cl,wh,ht,br,hv,b,pd}) {
    const styleBtn = {
        backgroundColor: bg,
        textColor:cl,
        width:wh,
        height:ht,
        borderRadius:br,
        hover:hv,
        border:b,
        color:cl,
        padding:pd,

    }

  return (
    <div className="button" style={styleBtn}>
        <a style={styleBtn} className="button__link" href="#Contacts">{title}</a>
    </div>
  )
}

export default Button