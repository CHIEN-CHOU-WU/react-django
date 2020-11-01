from .views import Digits_View
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'digits', Digits_View)
urlpatterns = router.urls
