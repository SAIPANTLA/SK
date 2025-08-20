from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TrainerViewSet, TraineeViewSet, LoginView

router = DefaultRouter()
router.register('trainers', TrainerViewSet)
router.register('trainees', TraineeViewSet)

urlpatterns = [
    path('login/', LoginView.as_view(), name='login'),
    path('', include(router.urls)),
]


