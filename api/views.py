from rest_framework import viewsets
from api.models import Player
from api.serializers import PlayerSerializer

class PlayerViewSet(viewsets.ModelViewSet):
    serializer_class = PlayerSerializer

    def get_queryset(self):
        queryset = Player.objects.all()
        name = self.request.query_params.get('name', None)
        if name is not None:
            queryset = queryset.filter(name=name, is_hidden=False)
        return queryset
