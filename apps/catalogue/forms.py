from django import forms
from .models import Category, Product


class AddProductForm(forms.ModelForm):
    
    class Meta:
        model = Product
        fields = ['category', 'name', 'price', 'image']
        
