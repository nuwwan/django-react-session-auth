from django.urls import path

from .views import get_user, login_view, logout_view, register_view

urlpatterns = [
    path("login", login_view, name="login_view"),
    path("register", register_view, name="register_view"),
    path("logout", logout_view, name="logout_view"),
    path("user", get_user, name="get_user"),
]
