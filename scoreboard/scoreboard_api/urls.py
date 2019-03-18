from django.urls import path
from . import views

urlpatterns = [
    path('scores', views.ScoreListCreate.as_view()),
]
