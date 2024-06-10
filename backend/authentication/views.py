from django.contrib.auth import authenticate, login, logout
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import AuthUser


"""
This Endpoint registers new user.
@param email : user email
@param password : password
@param firstname : user first name
@param lastname : user last name
"""
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


"""
This endpoint make a user login.
@param email : email
@param password : password
"""
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


"""
This endpoint logs out a user. The user is required to login.
"""
@csrf_exempt
@permission_classes([IsAuthenticated])
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


"""
This endpoint will return the user details for authenticated users. For un-authenticated users, 
will return 403 un-authenticated status message
"""
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def get_user(request):
    # construct the user data
    req_user = request.user
    data = {
        "id": req_user.id,
        "first_name": req_user.first_name,
        "email": req_user.email,
    }
    return Response(
        {"message": "User Details", "data": data}, status=status.HTTP_200_OK
    )
