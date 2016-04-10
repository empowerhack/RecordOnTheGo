from django.shortcuts import render

# Create your views here.
# VR: Creating a basic index page
from django.http import HttpResponse

def registration(request):
    return render(request, 'registration.html')

def loginpage(request):
    return render(request, 'login.html')

def index(request):
    return render(request, 'index.html')
    #return HttpResponse("hello world")
