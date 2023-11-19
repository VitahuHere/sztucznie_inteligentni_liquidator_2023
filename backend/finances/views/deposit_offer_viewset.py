from django.db import models
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from finances.models import BusinessDepositOffer, IndividualDepositOffer
from finances.serializers import (
    BusinessDepositOfferSerializer,
    IndividualDepositOfferSerializer,
)


class BusinessDepositOfferViewSet(ModelViewSet):
    queryset = BusinessDepositOffer.objects.all()
    serializer_class = BusinessDepositOfferSerializer

    @action(detail=False, methods=["get"], url_path="average-rate")
    def average_rate(self, request):
        return Response(
            BusinessDepositOffer.objects.aggregate(models.Avg("normal_interest_rate"))
        )

    @action(detail=False, methods=["get"], url_path="below-average-rate")
    def below_average_rate(self, request):
        # get those banks that have average rate below average rate
        average_rate = BusinessDepositOffer.objects.aggregate(
            models.Avg("normal_interest_rate")
        )["normal_interest_rate__avg"]
        return Response(
            BusinessDepositOffer.objects.filter(normal_interest_rate__lt=average_rate)
            .annotate(average_rate=models.Avg("normal_interest_rate"))
            .values("bank__name", "average_rate")
        )

    @action(detail=False, methods=["get"], url_path="above-average-rate")
    def above_average_rate(self, request):
        # get those banks that have average rate above average rate
        average_rate = BusinessDepositOffer.objects.aggregate(
            models.Avg("normal_interest_rate")
        )["normal_interest_rate__avg"]
        return Response(
            BusinessDepositOffer.objects.filter(normal_interest_rate__gt=average_rate)
            .annotate(average_rate=models.Avg("normal_interest_rate"))
            .values("bank__name", "average_rate")
        )


class IndividualDepositOfferViewSet(ModelViewSet):
    queryset = IndividualDepositOffer.objects.all()
    serializer_class = IndividualDepositOfferSerializer

    @action(detail=False, methods=["get"], url_path="average-rate")
    def average_rate(self, request):
        return Response(
            IndividualDepositOffer.objects.aggregate(models.Avg("normal_interest_rate"))
        )

    @action(detail=False, methods=["get"], url_path="below-average-rate")
    def below_average_rate(self, request):
        # get those banks that have average rate below average rate
        average_rate = IndividualDepositOffer.objects.aggregate(
            models.Avg("normal_interest_rate")
        )["normal_interest_rate__avg"]
        return Response(
            IndividualDepositOffer.objects.filter(normal_interest_rate__lt=average_rate)
            .annotate(average_rate=models.Avg("normal_interest_rate"))
            .values("bank__name", "average_rate")
        )

    @action(detail=False, methods=["get"], url_path="above-average-rate")
    def above_average_rate(self, request):
        # get those banks that have average rate above average rate
        average_rate = IndividualDepositOffer.objects.aggregate(
            models.Avg("normal_interest_rate")
        )["normal_interest_rate__avg"]
        return Response(
            IndividualDepositOffer.objects.filter(normal_interest_rate__gt=average_rate)
            .annotate(average_rate=models.Avg("normal_interest_rate"))
            .values("bank__name", "average_rate")
        )
