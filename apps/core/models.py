from django.db import models
from django.conf import settings

class Contact(models.Model):
    name = models.CharField(max_length=400, blank=False)
    email = models.EmailField(max_length=100, blank=False)
    message = models.TextField(blank=False)
    is_answered = models.BooleanField(default=False)

    def __str__(self):
        return self.name  
