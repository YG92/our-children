from django.conf.urls import url
from . import views
from .views import ProductListView, AddProductView


urlpatterns = [
    url(r'^(?:(?P<cat>\d+)/)?$', ProductListView.as_view(), name='home'),
     url(r'^add-product/', AddProductView.as_view(), name='add_product')
]
