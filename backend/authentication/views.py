from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

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
            user = AuthUser(
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
    return Response({"message": "something"})


@api_view(["POST"])
def logout_view(request):
    return Response({"message": "something"})
