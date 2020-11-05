from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from ..models import Digits
from .serializers import DigitsSerializer


# class Digits_View(viewsets.ModelViewSet):
#     serializer_class = DigitsSerializer
#     queryset = Digits.objects.all()

# overview
@api_view(['GET', 'HEAD'])
def apiOverview(request):
    api_urls = {
        'Digits:': 'http://127.0.0.1:8000/api/digits/',
        'Digits-detail': 'http://127.0.0.1:8000/api/digits/ + <str:pk>/',
    }
    return Response(api_urls)


# digits
@api_view(['GET'])
def digits_view(request):
    queryset = Digits.objects.all()
    serializer = DigitsSerializer(queryset, many=True)
    return Response(serializer.data)


# detail
@api_view(['GET'])
def digits_detail_view(request, pk):
    queryset = Digits.objects.get(id=pk)
    serializer = DigitsSerializer(queryset, many=False)
    return Response(serializer.data)


# create data
@api_view(['POST'])
def digits_create_view(request):
    serializer = DigitsSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


# update
@api_view(['POST'])
def digits_update_view(request, pk):
    queryset = Digits.objects.get(id=pk)
    serializer = DigitsSerializer(instance=queryset, data=request.data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


# delete
@api_view(['DELETE'])
def digits_delete_view(request, pk):
    queryset = Digits.objects.get(id=pk)
    queryset.delete()

    return Response("Delete successfully")
