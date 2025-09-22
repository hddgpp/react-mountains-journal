export function Entry({x}) {
    return(
           <div className="card">
            
              <div className="card-image">
              <img src={x.img} alt={x.mountainName}/>
              </div>
            
              <div className="card-info">
            
                <div className="card-location">
                  <span className="location-icon">📍</span>
                  <span className="location-country">{x.country}</span>
                  <a href={x.link} target="_blank" rel="noopener noreferrer" className="location-map">View {x.mountainName} on Google Maps</a>
                </div>
                <h2 className="card-title">{x.mountainName}</h2>
            
                <p className="card-dates">{x.date}</p>
            
                <p className="card-description">
                  {x.description}
                </p>
              </div>
            </div>
         
    )
}