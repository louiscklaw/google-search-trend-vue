// <title>The Title</title> <!-- ˜60 chars -->
// <meta name="description" content="The Description"> <!-- ˜150 chars -->
// <meta property="og:title" content="The Title">
// <meta property="og:description" content="The Description"> <!-- ˜300 chars -->
// <meta property="og:site_name" content="Sfida Blog">
// <meta property="og:locale" content="es_AR">
// <meta property="og:type" content="website">
// <meta property="og:url" content="http://www.sfidastudios.com">
// <meta property="og:image" content="http://www.sfidastudios.com/logo.png"> <!-- 200x200px - 1200x1200px --></meta>


/*eslint no-unused-vars:"off" */
function getFacebookOgMeta(
  description, title, site_name, locale, type, url, image
){
  return [
    'description',
    'title',
    'site_name',
    'locale',
    'type',
    'url',
    'image'
  ].map(meta_value => {
    return {vmid: `og:${meta_value}`, property: `og:${meta_value}`, content: eval(meta_value)}
  })
}

// twitter:card 	The card type, used with all cards. 	This is hardcoded to summary in the social-meta.xsl.
// twitter:site 	@username of website. 	Directory Variable: twitter-site
// twitter:creator 	@username of content creator 	Directory Variable: twitter-creator
//twitter:url 	The canonical URL for your page. This should be the undecorated URL, without session variables, user identifying parameters, or counters. 	The page's fully qualified URL when published from OU Campus.
//twitter:title 	Title of content (max 70 characters) 	The page's <title> node, found by the XPath expression: ouc:properties/title/text().
//twitter:description 	Description of content (maximum 200 characters) 	The page's meta description content, found by the XPath expression: ouc:properties/meta[@name='description']/@content.
//twitter:image 	URL of image to use in the card. Images must be less than 5MB in size. 	Directory Variable: twitter-image. Defaults to og-image directory variable if left blank.

/*eslint no-unused-vars:"off" */
function getTwitterOgMeta( site, creator, title, description, image){
  return [
    'description',
    'title',
    'site',
    'creator',
    'image'
  ].map(meta_value => {
    return {vmid: `twitter:${meta_value}`, property: `twitter:${meta_value}`, content: eval(meta_value)}
  })
}

/*eslint no-console:"off"*/
function  helloworld(){
  console.log('common.js helloworld')
  return 'helloworld common.js'
}

export default {
  getFacebookOgMeta,
  getTwitterOgMeta,
  helloworld
}