from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from cms.models import Player
import boto3
import uuid
from boto3.dynamodb.conditions import Key, Attr
from botocore.exceptions import ClientError
import json

dynamodb = boto3.resource("dynamodb", region_name='us-east-2')
table = dynamodb.Table('Player')

def index(request):
	if not request.user.is_authenticated:
		return JsonResponse({"status":"Login failed"})
	return JsonResponse({"status":"Access granted"})

@csrf_exempt
def user_login(request):
	body = json.loads(request.body)
	username = body['username']
	password = body['password']
	user = authenticate(request, username=username, password=password)
	if user is not None:
		login(request, user)
		return JsonResponse({"status":"LOGIN SUCCESS"})
	return JsonResponse({"status":"LOGIN FAILED","name":body["username"]})

@csrf_exempt
def addAdmin(request):
	if request.method == "POST":
			body = json.loads(request.body)
			user = User.objects.create_user(body["username"], "", body["password"])
			user.save()
			return JsonResponse({"status":"SUCCESS"})

def getNames(request):
	allNames = list(User.objects.values())
	return JsonResponse(allNames,safe=False)

@csrf_exempt
def user_logout(request):
	logout(request)
	return JsonResponse({"status":"LOGGED OUT!!"})	

@csrf_exempt
def addPlayer(request):
	if request.method == "POST":
			body = json.loads(request.body)
			player = Player.objects.create(first_name=body["first_name"], last_name=body["last_name"], team_name=body["team_name"], years_played=body["years_played"])
			table.put_item(Item={'id':uuid.uuid4().hex, 'first_name':player.first_name,'last_name':player.last_name,
				'team_name':player.team_name, 'years_played':player.years_played})
			return JsonResponse({"status":player.first_name+" "+player.last_name + " created succesfully"})

def getPlayers(request):
	response = table.scan()	
	return JsonResponse(response["Items"], safe=False)
