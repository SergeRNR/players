from rest_framework import serializers
from compare.models import Player

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('id', 'name', 'battles_total', 'is_hidden', 'created_at')
