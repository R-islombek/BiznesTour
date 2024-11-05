import './Map.css'

function Map() {
  

  return (
    <div className="map">
      <div className="container map__container">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12353995.309252445!2d53.99551721425428!3d40.891355032021565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b20a5d676b1%3A0xca0a6dad7e841e20!2z0KPQt9Cx0LXQutC40YHRgtCw0L0!5e0!3m2!1sru!2s!4v1716149619286!5m2!1sru!2s" 
            width="100%" 
            height="100%"  
            style={{border:0}}
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade"
            >

            </iframe>
      </div>
    </div>
  )
}

export default Map