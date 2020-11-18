import time as true_time
import pprint
import pathlib
import operator
import pandas as pd

from configparser import ConfigParser
from datetime import datetime
from datetime import timedelta
from pyrobot.robot import PyRobot
from pyrobot.indicator import Indicators

# Grab the config file values
config = ConfigParser()
config.read('config.ini')

CLIENT_ID = config.get('client', 'client_id')
REDIRECT_URI = config.get('client', 'redirect_uri')
CREDENTIALS_PATH = config.get('client', 'client_id')
ACCOUNT_NUMBER = config.get('client', 'client_id')

# Initalize the robot.
# trading_robot = PyRobot(
#     client_id=CLIENT_ID,
#     redirect_uri=REDIRECT_URI,
#     credentials_path=CREDENTIALS_PATH,
#     trading_account=ACCOUNT_NUMBER,
#     paper_trading=True
# )