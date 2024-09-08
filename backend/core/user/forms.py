from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2', 'role']

class CustomLoginForm(AuthenticationForm):
    username = forms.CharField(max_length=254)
    password = forms.CharField(widget=forms.PasswordInput)
