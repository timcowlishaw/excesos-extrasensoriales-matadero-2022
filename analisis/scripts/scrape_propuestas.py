import scrapy
import re
from scrapy.shell import inspect_response

class PropuestasSpider(scrapy.Spider):
    name = 'propuestasspider'
    start_urls = ['https://datos.madrid.es/portal/site/egob/menuitem.400a817358ce98c34e937436a8a409a0/?vgnextoid=102612b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextchannel=102612b9ace9f310VgnVCM100000171f5a0aRCRD&vgnextfmt=default']

    def parse(self, response):
        #inspect_response(response, self)

        for row in response.css('.events-results .row'):
            title_elem = row.css(".event-link")
            meta = row.css(".event-intro p")
            data = {
                'title': title_elem.css('::text').get(),
                'link': "https://datos.madrid.es" + title_elem.css('::attr("href")').get()
            }
            for field in meta:
                key = re.sub("[^0-9a-zA-ZáéíóúÁÉÍÓÚñÑ ]", "", field.css("strong::text").get()).lower().strip().replace(" ", "_")
                data[key] = "".join(field.css("::text").extract())

            data["votos"] = int(re.sub("[^0-9]", "", row.css("p[title='Valoraciones']::text").get()))

            yield data

        for next_page in response.css('.next a.pagination-text'):
            yield response.follow(next_page, self.parse)