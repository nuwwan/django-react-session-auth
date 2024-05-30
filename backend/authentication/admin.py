# from django.contrib import admin
# from django.contrib.auth.admin import UserAdmin
# from .models import AuthUser

# class CustomUserAdmin(UserAdmin):
#     model = AuthUser
#     list_display = ('email', 'first_name', 'last_name', 'is_staff', 'is_active')
#     list_filter = ('is_staff', 'is_active')
#     fieldsets = (
#         (None, {'fields': ('email', 'password')}),
#         ('Personal Info', {'fields': ('first_name', 'last_name')}),
#         ('Permissions', {'fields': ('is_staff', 'is_active', 'is_superuser')}),
#     )
#     add_fieldsets = (
#         (None, {
#             'classes': ('wide',),
#             'fields': ('email', 'password1', 'password2', 'is_staff', 'is_active', 'first_name', 'last_name')}
#         ),
#     )
#     search_fields = ('email',)
#     ordering = ('email',)

# admin.site.register(AuthUser, CustomUserAdmin)
