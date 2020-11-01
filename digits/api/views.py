from rest_framework import viewsets
from ..models import Digits
from .serializers import DigitsSerializer


class Digits_View(viewsets.ModelViewSet):
    serializer_class = DigitsSerializer
    queryset = Digits.objects.all()
