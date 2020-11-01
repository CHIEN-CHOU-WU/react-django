from rest_framework import serializers
from ..models import Digits


class DigitsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Digits
        fields = ('id', 'image', 'result')
