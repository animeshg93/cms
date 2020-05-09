from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Name
from django.core import serializers


import json

def index(request):
	return HttpResponse("Welcome to the CMS App")

@csrf_exempt
def addAdmin(request):
	if request.method == "POST":
			body = json.loads(request.body)
			Name.objects.create(first_name=body["first_name"], last_name=body["last_name"])
			return JsonResponse({"status":"SUCCESS"})


@csrf_exempt
def login(request):
	if request.method == "POST":
			body = json.loads(request.body)
			try:
				Name.objects.get(first_name=body["first_name"])
			except Exception as e:
				return JsonResponse({"status":"FAILED","name":body["first_name"]})
			return JsonResponse({"status":"SUCCESS"})



def getNames(request):
	allNames = list(Name.objects.values())
	return JsonResponse(allNames,safe=False)