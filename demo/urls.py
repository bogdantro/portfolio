from django.urls import path
from apps.core.views import *
from django.conf.urls.static import *
from django.conf import *
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', home, name='home'),
    # Pages
    path('about-me', about, name='about'),
    path('projects', projects, name='projects'),
    path('get-in-touch', contact, name='contact'),


] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
