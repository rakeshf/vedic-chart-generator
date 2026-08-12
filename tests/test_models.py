from datetime import date, time

import pytest

from vedic_chart.models import BirthData


def test_rejects_invalid_coordinates():
    with pytest.raises(ValueError):
        BirthData("Test", date(2000, 1, 1), time(12), "Asia/Kolkata", 91, 0)
