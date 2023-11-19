from rest_framework.viewsets import ModelViewSet

from finances.models import Bank
from finances.serializers import BankSerializer


class BankViewSet(ModelViewSet):
    queryset = Bank.objects.all()
    serializer_class = BankSerializer
