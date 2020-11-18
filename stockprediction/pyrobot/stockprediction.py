import requests
import urllib
import time
from splinter import Browser
from config import config


# # define the location of the chrome driver
# executable_path = {'executable_path': '../chromedriver'}

# # create a new instance of the chrome browser
# browser = Browser('chrome', **executable_path, headless=False)

# # define the components of the url
# method = 'GET'
# url = 'https://auth.tdameritrade.com/auth?'
# client_code = config.client_id() + '@AMER.OAUTHAP'
# payload = {'response_type':'code','redirect_uri':'http://127.0.0.1:8000/stock','client_id':client_code}

# # build the url
# built_url = requests.Request(method, url, params=payload).prepare()
# built_url = built_url.url

# # go to pur url
# browser.visit(built_url)


# The daily prices endpoints
endpoint = r"https://api.tdameritrade.com/v1/marketdata/{}/pricehistory".format(
    'GOOG')


# defined our payload
payload = {'apikey': 'NPJBMUYTIITL7A46GN6GNB2FXVEPMMQL',
           'periodType': 'day',
           'frequencyType': 'minute',
           'frequency': '1',
           'period': '2',
           'endDate': '1605144009000',
           'startDate': '1605143949000',
           'needExtendedHoursData': 'true'

           }

# make a request
content = requests.get(url=endpoint, params=payload)
# print(content.url)

# convert it to dictionary
data = content.json()
# print(data)


# The daily prices endpoints
endpoint = r"https://api.tdameritrade.com/v1/marketdata/{}/quotes".format(
    'GOOG')

# defined our payload
payload = {'apikey': 'NPJBMUYTIITL7A46GN6GNB2FXVEPMMQL'}

# make a request
content = requests.get(url=endpoint, params=payload)
# print(content.url)

# convert it to dictionary
data = content.json()
print(data)
