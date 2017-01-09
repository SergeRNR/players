from __future__ import division
from django.db import models

class Player(models.Model):
    name = models.CharField(max_length=50)
    battles_total = models.IntegerField(default=0)
    wins_total = models.IntegerField(default=0)
    days_total = models.IntegerField(default=0)
    vehicles_x = models.IntegerField(default=0)
    exp_total = models.IntegerField(default=0)
    is_hidden = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def rating(self):
        if self.days_total > 0:
            return round(self.wins_total / self.days_total, 2)
        else:
            return 0

    def exp_avg(self):
        if self.days_total > 0:
            return round(self.exp_total / self.days_total, 2)
        else:
            return 0
