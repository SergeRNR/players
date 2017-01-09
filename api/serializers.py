from rest_framework import serializers
from api.models import Player

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = (
            'id',
            'name',
            'battles_total',
            'wins_total',
            'days_total',
            'vehicles_x',
            'rating',
            'exp_avg',
            'exp_total',
            'is_hidden',
            'created_at'
        )
