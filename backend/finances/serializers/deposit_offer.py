from rest_framework.serializers import ModelSerializer

from finances.models import BusinessDepositOffer, IndividualDepositOffer


class BusinessDepositOfferSerializer(ModelSerializer):
    class Meta:
        model = BusinessDepositOffer
        fields = "__all__"


class IndividualDepositOfferSerializer(ModelSerializer):
    class Meta:
        model = IndividualDepositOffer
        fields = "__all__"
