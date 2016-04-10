from django.conf.urls import url
from django.views.generic import TemplateView

from . import views

urlpatterns = [

    url(r'^registration.html', views.registration, name='registration'),
    url(r'^login.html', views.loginpage, name='loginpage'),
    url(r'^', views.index, name='index'),

    #url(r'^$', TemplateView.as_view(template_name='index.html')),
]
