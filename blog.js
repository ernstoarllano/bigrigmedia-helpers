/**
 *  WordPress Posts from REST API
 */
class WordPressPosts {
  constructor(url = 'https://www.bigrigmedia.com', limit = 100) {
    this.cors = 'https://cors-anywhere.herokuapp.com/'
    this.url = url
    this.limit = limit

    this.fetchPosts()
  }

  /**
   * Return all posts
   */
  fetchPosts() {
    fetch(`${this.cors}${this.url}/wp-json/wp/v2/posts/?per_page=${this.limit}`)
      .then(res => res.json())
      .then(data => this.newPost(data))
      .catch(err => console.log(err))
  }

  /**
   * Return post's categories
   * 
   * @param   {number}  id
   * @return  {Promise} Promise object containting a post's categories  
   */
  fetchCategories(id) {
    if (!id) return

    return fetch(`${this.cors}${this.url}/wp-json/wp/v2/categories?post=${id}`)
      .then(res => res.json())
      .then(data => { return data })
      .catch(err => console.log(err))
  }

  /**
   * Return post's tags
   * 
   * @param   {number}  id
   * @return  {Promise} Promise object containting a post's categories  
   */
  fetchTags(id) {
    if (!id) return

    return fetch(`${this.cors}${this.url}/wp-json/wp/v2/tags?post=${id}`)
      .then(res => res.json())
      .then(data => { return data })
      .catch(err => console.log(err))
  }

  /**
   * Return a post's image url
   * 
   * @param   {string}  content 
   * @return  {string}  The url of an image
   */
  getImage(content) {
    if (!content) return

    const imgSrc = content.rendered.match(/src="([^"]*)"/g)

    if (imgSrc !== null) {
      const src = imgSrc.toString().substr(4)

      return src.replace(/["]+/g, '')
    }

    return null
  }

  /**
   * Create a new post object
   * 
   * @param {object}  entries
   */
  newPost(entries) {
    if (!entries) return

    const posts = []

    entries.forEach(entry => {
      const post = new Object()
      const { title, content, id, date, format, slug } = entry

      post.title = title.rendered
      post.content = content.rendered.replace(/\n/g, '\\\n')
      post.id = id
      post.date = date
      post.format = format
      post.slug = slug
      post.thumbnail = this.getImage(content)
      post.categories = []
      post.tags = []

      this.fetchCategories(id).then(categories => {
        categories.forEach(category => {
          post.categories.push(category.name)
        })
      })

      this.fetchTags(id).then(tags => {
        tags.forEach(tag => {
          post.tags.push(tag.name)
        })
      })

      posts.push(post)
    })

    console.log(JSON.stringify(posts))
  }
}

new WordPressPosts('http://www.dynamicfundinginc.com')