"""unify_connecting_students URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from re import template
from django.contrib import admin
from django.contrib import auth
from django.urls import path, include
from users import views as user_views
from django.contrib.auth import views as auth_views
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('users.urls')),
    path('', include('feed.urls')),
    # path('', include('allauth.urls')),
    path('homepage/', user_views.home, name='homepage'),
    path('users/', user_views.users_list, name= 'users_list'),
    path('users/<slug>', user_views.profile_view, name= 'profile_view'),
    path('friends/', user_views.friend_list, name= 'friend_list'),
    path('users/friend_request/send/<int:id>/', user_views.send_friend_request, name= 'send_friend_request'),
    path('users/friend_request/cancel/<int:id>/', user_views.cancel_friend_request, name= 'cancel_friend_request'),
    path('users/friend_request/accept/<int:id>/', user_views.accept_friend_request, name= 'accept_friend_request'),
    path('users/friend_request/delete/<int:id>/', user_views.delete_friend_request, name= 'delete_friend_request'),
    path('users/friend/delete/<int:id>/', user_views.delete_friend, name= 'delete_friend'),
    path('edit_profile/', user_views.edit_profile, name= 'edit_profile'),
    path('my_profile/', user_views.my_profile, name= 'my_profile'),
    path('search_users/', user_views.search_users, name= 'search_users'),
    path('register/', user_views.register, name='register'),
    path('login/', auth_views.LoginView.as_view(template_name= 'users/login.html'), name= 'login'),
    path('logout/', auth_views.LogoutView.as_view(template_name= 'users/logout.html'), name= 'logout'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name= 'users/password_reset.html'), name= 'password_reset'),
    path('password_reset/done/', auth_views.PasswordResetView.as_view(template_name= 'users/password_reset_done.html'), name= 'password_reset_done'),
    path('password_reset_confirm/<uidb64>/<token>/', auth_views.PasswordResetConfirmView.as_view(template_name= 'users/password_reset_confirm.html'), name= 'password_reset_confirm'),
    path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(template_name= 'users/password_reset_complete.html'), name= 'password_reset_complete'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)