from django.db import models


class Category(models.Model):
    
    name = models.CharField(max_length=200)
    
    def __str__(self):
        return self.name


class Product(models.Model):
    
    category = models.ForeignKey(Category)
    name = models.CharField(max_length=200)
    image = models.ImageField(upload_to='media')
    description = models.TextField(blank=True)
    price = models.IntegerField()
    

    def __str__(self):
        return self.name

