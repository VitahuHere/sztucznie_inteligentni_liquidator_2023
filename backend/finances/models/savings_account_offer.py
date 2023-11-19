from django.db import models

from finances.models import Bank


class SavingsAccountOffer(models.Model):
    name = models.CharField(max_length=1024)
    description = models.TextField(blank=True, default="")
    duration = models.PositiveIntegerField()
    normal_interest_rate = models.DecimalField(max_digits=5, decimal_places=3)
    special_interest_rate = models.DecimalField(
        max_digits=5, decimal_places=3, null=True, blank=True
    )
    special_interest_rate_duration = models.PositiveIntegerField(null=True, blank=True)
    date_start = models.DateField()
    created_at = models.DateTimeField(auto_now_add=True)
    conditions = models.TextField(blank=True, default="")

    class Meta:
        abstract = True


class BusinessSavingsAccountOffer(SavingsAccountOffer):
    bank = models.ForeignKey(
        Bank,
        on_delete=models.CASCADE,
        related_name="business_savings_account_offers",
    )

    def __str__(self):
        return self.name


class IndividualSavingsAccountOffer(SavingsAccountOffer):
    bank = models.ForeignKey(
        Bank,
        on_delete=models.CASCADE,
        related_name="individual_savings_account_offers",
    )

    def __str__(self):
        return self.name
