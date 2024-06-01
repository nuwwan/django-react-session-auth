from django.contrib.auth import authenticate, login, logout
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import AuthUser


@api_view(["POST"])
def register_view(request):
    data = request.data
    email = data.get("email")
    password = data.get("password")
    first_name = data.get("firstname")
    last_name = data.get("lastname")
    if email and password and first_name:
        # create the User
        try:
            # check if the user already exists
            user = AuthUser.objects.filter(email=email)
            if user:
                return Response(
                    {"message": "User already exists. Please login"},
                    status=status.HTTP_409_CONFLICT,
                )
            user = AuthUser.objects.create_user(
                email=email,
                password=password,
                first_name=first_name,
                last_name=last_name,
            )
            user.save()
            return Response({"status": "Success"}, status=status.HTTP_200_OK)
        except Exception as ex:
            return Response(
                {"status": "Error"}, status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
    else:
        return Response({"status": "Error"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login_view(request):
    data = request.data
    email = data.get("email")
    password = data.get("password")
    if email and password:
        try:
            # authenticate user
            user = authenticate(email=email, password=password)
            if user is not None:
                # make the request loged in
                login(request, user)
                return Response(
                    {"message": "Successfully Authenticated"}, status=status.HTTP_200_OK
                )
            else:
                return Response(
                    {"message": "Invalid credentials"},
                    status=status.HTTP_401_UNAUTHORIZED,
                )
        except:
            return Response(
                {"message": "Failed to authenticate User"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR,
            )
    else:
        return Response(
            {"message": "Please check input data"}, status=status.HTTP_400_BAD_REQUEST
        )


@api_view(["POST"])
def logout_view(request):
    try:
        logout(request)
        return Response(
            {"message": "User successfully loged out"}, status=status.HTTP_200_OK
        )
    except Exception as ex:
        return Response(
            {"message": "Operation Failed!"},
            status=status.HTTP_500_INTERNAL_SERVER_ERROR,
        )
