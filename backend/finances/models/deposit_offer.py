from django.db import models

from finances.models import Bank


class DepositOffer(models.Model):
    name = models.CharField(max_length=1024, default="", blank=True)
    description = models.TextField(blank=True, default="")
    duration = models.PositiveIntegerField(null=True, blank=True)
    normal_interest_rate = models.DecimalField(max_digits=5, decimal_places=3)
    special_interest_rate = models.DecimalField(
        max_digits=5, decimal_places=3, null=True, blank=True
    )
    date_start = models.DateField()
    maturity = models.DateField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    conditions = models.TextField(blank=True, default="")

    class Meta:
        abstract = True


class BusinessDepositOffer(DepositOffer):
    bank = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name="business_deposit_offers"
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(maturity__gte=models.F("date_start")),
                name="business_maturity_gte_date_start",
            ),
        ]

    def __str__(self):
        return self.bank.name + " " + self.name


class IndividualDepositOffer(DepositOffer):
    bank = models.ForeignKey(
        Bank, on_delete=models.CASCADE, related_name="individual_deposit_offers"
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(maturity__gte=models.F("date_start")),
                name="individual_maturity_gte_date_start",
            ),
        ]

    def __str__(self):
        return self.bank.name + " " + self.name
