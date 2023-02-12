from django.contrib import admin
from .models import *


class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'is_answered',]
    search_fields = ('name', 'email', 'message',)
    list_filter = ('is_answered',)
    list_editable = ('is_answered',)

admin.site.register(Contact, ContactAdmin)