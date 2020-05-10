from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Name
from django.core import serializers
from  django.contrib.auth.hashers import make_password, check_password


import json

def index(request):
	return HttpResponse("Welcome to the CMS App")

@csrf_exempt
def addAdmin(request):
	if request.method == "POST":
			body = json.loads(request.body)
			Name.objects.create(username=body["username"], password=make_password(body["password"]))
			return JsonResponse({"status":"SUCCESS"})


@csrf_exempt
def login(request):
	if request.method == "POST":
			body = json.loads(request.body)
			try:
				user = Name.objects.get(username=body["username"])
				if check_password(body["password"], user.password):
					return JsonResponse({"status":"SUCCESS"})
				else:
					return JsonResponse({"status":"LOGIN FAILED","name":body["username"]})
			except Exception as e:
				return JsonResponse({"status":"User not found","name":body["username"]})

			# Need to change return value
			



def getNames(request):
	allNames = list(Name.objects.values())
	return JsonResponse(allNames,safe=False)