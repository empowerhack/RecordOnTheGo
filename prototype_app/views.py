from django.shortcuts import render

# Create your views here.
# VR: Creating a basic index page
from django.http import HttpResponse

def index(request):
    return HttpResponse("hello world")
