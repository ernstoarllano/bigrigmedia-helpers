/**
 * Instagram Recent Feed
 */
class InstagramFeed {
  /**
   * Initialze the feed
   * 
   * @param {number} id The id of the user to retrieve posts
   */
  constructor(id) {
    this.userId = id
    this.token = ''

    this.fetchFeed(this.userId)
  }

  /**
   * Return recent posts
   *
   * @param {number} userId 
   */
  fetchFeed(userId) {
    if (!userId && !this.token) return

    fetch(`https://api.instagram.com/v1/users/${userId}/media/recent/?access_token=${this.token}&count=5`)
      .then(res => res.json())
      .then(data => this.createThumbnails(data.data))
      .catch(err => console.error(err))
  }

  /**
   * Create thumbnails from data
   * 
   * @param {array} images 
   */
  createThumbnails(images) {
    if (!images) return

    const imagesContainer = document.createElement('ul')

    imagesContainer.classList.add('instagram-grid')

    images.forEach(image => {
      const thumbContainer = document.createElement('li')
      const imageContainer = document.createElement('img')
      const thumbAnchor = document.createElement('a')

      thumbAnchor.setAttribute('href', image.link)

      imageContainer.setAttribute('src', image.images.low_resolution.url)
      imageContainer.setAttribute('width', image.images.low_resolution.width)
      imageContainer.setAttribute('height', image.images.low_resolution.height)

      thumbAnchor.append(imageContainer)
      thumbContainer.append(thumbAnchor)
      imagesContainer.append(thumbContainer)
    })

    document.body.append(imagesContainer)
  }
}