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
from captcha.fields import ReCaptchaField
from captcha.widgets import ReCaptchaV2Checkbox


# Home
def home(request):
    return render(request, 'core/home.html')

    # Pages
def about(request):
    return render(request, 'pages/about.html')

def projects(request):
    return render(request, 'pages/projects.html')
    
def contact(request):
    if request.method=='POST' and 'contact' in request.POST:
        navn = request.POST.get('navn')
        email = request.POST.get('email')
        message = request.POST.get('message')

        captcha = ReCaptchaField(widget=ReCaptchaV2Checkbox())

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
        send_mail('Epost fra portfolio', message, '', ['sabertoothtri@gmail.com'])
        return redirect('/')
    return render(request, 'pages/contact.html')  

