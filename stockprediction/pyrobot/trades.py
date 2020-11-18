from datetime import datetime

from typing import List
from typing import Union
from typing import Optional

class Trade():

    def __init__(self):
        """Initalizes a new order."""

        self.order = {}
        self.trade_id = ""

        self.side = ""
        self.side_opposite = ""
        self.enter_or_exit = ""
        self.enter_or_exit_opposite = ""

        self._order_response = {}
        self._triggered_added = False
        self._multi_leg = False

    