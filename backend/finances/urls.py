from rest_framework import routers

from finances.views import (
    BankViewSet,
    BusinessDepositOfferViewSet,
    IndividualDepositOfferViewSet,
)

router = routers.SimpleRouter()
router.register(r"banks", BankViewSet)
router.register(r"deposit-offers/business", BusinessDepositOfferViewSet)
router.register(r"deposit-offers/individual", IndividualDepositOfferViewSet)

urlpatterns = router.urls
