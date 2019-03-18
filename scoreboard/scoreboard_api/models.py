from django.db import models


class Score(models.Model):
    name = models.CharField(max_length=50)
    score = models.PositiveIntegerField()
    create_time = models.DateTimeField(auto_now_add=True)
