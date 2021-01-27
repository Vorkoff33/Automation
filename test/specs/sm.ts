describe('Website', function () {
    it('should be alive', function () {
        browser.url(`https://www.google.com/intl/ru/photos/about/`)
        const img = $('img[src="https://www.google.com/photos/about/static/images/logos/logo_photos_192px.svg"]')
       if(!img.isExisting())
       {
        throw new Error('Website should be opened, and logo displayed');
       } 
    })
})