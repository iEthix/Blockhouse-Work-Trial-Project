from django.contrib import admin
from django.urls import path
from rest_framework.response import Response
from rest_framework.views import APIView

class CandlestickDataView(APIView):
    
    #API view to provide data for a candlestick chart.
    def get(self, request):
        # Hardcoded data for candlestick chart, usually fetched from a database or external service
        data = {
            "data": [
                {"x": "2023-01-01", "open": 30, "high": 40, "low": 25, "close": 35},
                {"x": "2023-01-02", "open": 35, "high": 45, "low": 30, "close": 40},
            ]
        }
        return Response(data)
    
class LinechartDataView(APIView):
    
    #API view to provide data for a line chart.
    def get(self, request):
        #Hardcoded data for line chart
        data = {
            "labels": ["Jan", "Feb", "Mar", "Apr"],
            "data": [10, 20, 30, 40]
        }
        return Response(data)
    
class BarchartDataView(APIView):
    
    #API view to provide data for a bar chart.
    def get(self, request):
        #Hardcoded data for bar chart
        data = {
            "labels": ["Product A", "Product B", "Product C"],
            "data": [100, 150, 200]
        }
        return Response(data)
    
class PiechartDataView(APIView):

    #API view to provide data for a pie chart.
    def get(self, request):
        # Hardcoded data for pie chart
        data = {
            "labels": ["Red", "Blue", "Yellow"],
            "data": [300, 50, 100]
        }
        return Response(data)

#URL patterns to route the API requests to the corresponding views
urlpatterns = [
    path('admin/', admin.site.urls),  #admin route
    path('api/candlestick-data/', CandlestickDataView.as_view(), name='candlestick-data'),
    path('api/linechart-data/', LinechartDataView.as_view(), name='linechart-data'),
    path('api/barchart-data/', BarchartDataView.as_view(), name='barchart-data'),
    path('api/piechart-data/', PiechartDataView.as_view(), name='piechart-data'),
]