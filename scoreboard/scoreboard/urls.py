from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('scoreboard/api/', include('scoreboard_api.urls'))
]
