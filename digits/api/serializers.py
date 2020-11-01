from rest_framework import serializers
from ..models import Digits
import base64
import uuid
from django.core.files.base import ContentFile


class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        _format, str_img = data.split(';base64')
        decode_file = base64.b64decode(str_img)
        fname = f"{str(uuid.uuid4())[:10]}.png"
        data = ContentFile(decode_file, name=fname)
        return super().to_internal_value(data)


class DigitsSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = Digits
        fields = ('id', 'image', 'result')
