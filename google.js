/**
 * Google Map
 */
class GoogleMap {
  /**
   * Initialze the GoogleMap object
   * 
   * @param {string} address The address that will get rendered on the map
   */
  constructor(address) {
    // Default container that will hold the rendered map
    this.render = document.getElementById('map')

    // Initialize the map
    this.initMap(address)
  }

  /**
   * Initialize a Google Map
   * 
   * @param   {string} address 
   * @return  {object} Return a new Google Map
   */
  initMap(address) {
    if (!address) return

    const map = new google.maps.Map(this.render, {
      zoom: 8,
      center: { lat: 31.7860603, lng: -132.0853276 },
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    })

    const geocoder = new google.maps.Geocoder()

    this.geocodeAddress(address, geocoder, map)
  }

  /**
   * Reverse Geocode an address
   * 
   * @param   {string} address 
   * @param   {object} geocoder 
   * @param   {object} map 
   * @return  {object} Return a Google Marker
   */
  geocodeAddress(address, geocoder, map) {
    if (!address && !geocoder && !map) return

    geocoder.geocode({ address }, (results, status) => {
      if (status === 'OK') {
        let position = results[0].geometry.location
        let marker = new google.maps.Marker({ map, position })

        marker.setMap(map)

        map.setCenter(results[0].geometry.location)
      } else {
        console.log('Geocode was not successful for the following reason: ' + status)
      }
    })
  }
}