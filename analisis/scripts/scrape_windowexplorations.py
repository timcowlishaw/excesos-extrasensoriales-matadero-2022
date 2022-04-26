import scrapy
import re
import json
from scrapy.shell import inspect_response

with open("./data/window_expeditions_ids.json", "r") as file:
    ids_json = json.load(file)

BASE_URL = "https://windowexpeditions.com/en/contribution/%s"

class WindowExplorationsSpider(scrapy.Spider):
    name = 'windowexplorationsspider'
    start_urls = [BASE_URL % id for id in ids_json["en"]]

    def parse(self, response):
        #inspect_response(response, self)
        yield { "text": response.css(".description-text::text").get() }