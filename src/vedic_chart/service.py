from dataclasses import asdict
from typing import Optional

from .ephemeris import celestial_positions
from .models import BirthData, ChartOptions
from .vargas import VARGAS, whole_sign_house


def generate_charts(birth: BirthData, options: Optional[ChartOptions] = None) -> dict:
    options = options or ChartOptions()
    planets, ascendant_longitude, ayanamsha, utc = celestial_positions(birth, options)

    charts: dict[str, dict] = {}
    for chart_name, transform in VARGAS.items():
        ascendant = transform(ascendant_longitude)
        houses: dict[int, list[dict]] = {house: [] for house in range(1, 13)}
        ascendant_item = {
            **ascendant.to_dict(),
            "house": 1,
            "retrograde": False,
            "source_longitude": ascendant_longitude,
        }
        houses[1].append({"name": "Asc", **ascendant_item})

        transformed_planets: dict[str, dict] = {"Asc": ascendant_item}
        for name, raw in planets.items():
            position = transform(raw["longitude"])
            house = whole_sign_house(position.sign, ascendant.sign)
            item = {
                **position.to_dict(),
                "house": house,
                "retrograde": raw["retrograde"],
                "source_longitude": raw["longitude"],
            }
            transformed_planets[name] = item
            houses[house].append({"name": name, **item})

        charts[chart_name] = {
            "ascendant": ascendant.to_dict(),
            "planets": transformed_planets,
            "houses": houses,
        }

    return {
        "birth": {
            **asdict(birth),
            "date": birth.date.isoformat(),
            "time": birth.time.isoformat(),
            "utc": utc.isoformat(),
        },
        "options": asdict(options),
        "metadata": {
            "ayanamsha_degrees": ayanamsha,
            "house_system": "whole_sign",
        },
        "charts": charts,
    }
