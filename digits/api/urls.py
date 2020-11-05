from .views import apiOverview, digits_view, digits_detail_view, digits_create_view, digits_update_view, digits_delete_view
from django.urls import path, include
from rest_framework.routers import DefaultRouter

# router = DefaultRouter()
# router.register(r'digits', Digits_View)

urlpatterns = [
    # path('', include(router.urls)),
    path('', apiOverview, name='api-overview'),
    path('digits/', digits_view, name='digits'),
    path('digits/<str:pk>/', digits_detail_view, name='digits_detail'),
    path('digits/create', digits_create_view, name='digits_create'),
    path('digits/update/<str:pk>/', digits_update_view, name='digits_update'),
    path('digits/delete/<str:pk>', digits_delete_view, name='digits_delete')
]
