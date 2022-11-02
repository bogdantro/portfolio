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


def home(request):

    if request.method=='POST' and 'contact' in request.POST:
        navn = request.POST.get('navn')
        email = request.POST.get('email')
        message = request.POST.get('message')

        data = {
            'navn': navn,
            'email': email,
            'message': message,
        }
        message = dedent('''
        Fra: {}

        Navn: {}

        Beskjed: {}
        ''').format(data['email'], data['navn'], data['message'], )
        send_mail('Webiser Contact Form', message, '', ['sabertoothtri@gmail.com'])
        return redirect('/')

    return render(request, 'core/home.html')


    # Projects
def project_webiser(request):
    return render(request, 'pages/projects/webiser.html')

def project_stellcare(request):
    return render(request, 'pages/projects/stellcare.html')

def project_gglhmr(request):
    return render(request, 'pages/projects/gglhmr.html')
