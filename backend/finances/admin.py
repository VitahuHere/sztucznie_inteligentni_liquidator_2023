from django.contrib import admin

from finances.models import (
    BusinessDepositOffer,
    IndividualDepositOffer,
    Bank,
)

admin.site.register(BusinessDepositOffer)
admin.site.register(IndividualDepositOffer)
admin.site.register(Bank)
