from django.db import models

class Player(models.Model):
	first_name = models.CharField(max_length=30)
	last_name = models.CharField(max_length=30)
	team_name = models.CharField(max_length=30)
	years_played = models.IntegerField()
