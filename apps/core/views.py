import warnings
from urllib import *
from django.shortcuts import *

from django.shortcuts import *
from django.http import *
from django.core.mail import *
from django.contrib.auth import *
from django.template.loader import *
from textwrap import *
from django.views.decorators.csrf import *
from django.db.models import * 
from django.contrib.auth.decorators import *
from .models import *


# Home
def home(request):
    return render(request, 'core/home.html')

    # Pages
def about(request):
    return render(request, 'pages/about.html')

def projects(request):
    return render(request, 'pages/projects.html')
    
def contact(request):
    if request.method == 'POST':
        name = request.POST.get('name', )
        email = request.POST.get('email', '')
        message = request.POST.get('message', '')

        contact = Contact.objects.create(name=name, message=message, email=email)
        return redirect('/')
    return render(request, 'pages/contact.html')

