from django.db import models

class Name(models.Model):
	first_name=models.CharField(max_length=200)
	last_name = models.CharField(max_length=200)

	def __str__(self):
		return self.name