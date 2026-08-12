from typing import Optional

from .models import BirthData, ChartOptions


def generate_charts(birth: BirthData, options: Optional[ChartOptions] = None) -> dict:
    # Lazy import keeps the pure Varga module usable without loading the native
    # Swiss Ephemeris extension until an astronomical calculation is requested.
    from .service import generate_charts as _generate_charts

    return _generate_charts(birth, options)

__all__ = ["BirthData", "ChartOptions", "generate_charts"]
