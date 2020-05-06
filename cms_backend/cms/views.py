from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Name
from django.core import serializers

import json

def index(request):
	return HttpResponse("Welcome to the CMS App")

@csrf_exempt
def publish(request):
	if request.method == "POST":
			body = json.loads(request.body)
			