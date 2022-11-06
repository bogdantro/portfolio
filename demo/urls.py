from django.urls import path
from apps.core.views import *
from django.conf.urls.static import *
from django.conf import *
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    # Pages

] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
