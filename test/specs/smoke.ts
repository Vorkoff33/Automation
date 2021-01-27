describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`)
        const img = $('img[src="https://demo.litecart.net/images/logotype.png"]')
       if(img.isExisting())
       {
        throw new Error('Website should be opened, and logo displayed');
       } 
    })
})