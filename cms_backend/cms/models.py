from django.db import models

class Name(models.Model):
	username=models.CharField(max_length=200)
	password = models.CharField(max_length=200)

	def __str__(self):
		return self.name