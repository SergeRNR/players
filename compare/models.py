from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=50)
    battles_total = models.IntegerField()
    is_hidden = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
