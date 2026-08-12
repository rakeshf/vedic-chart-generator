from html import escape
from pathlib import Path

HOUSE_CENTRES = {
    1: (300, 105), 2: (185, 65), 3: (85, 105), 4: (120, 220),
    5: (85, 335), 6: (185, 375), 7: (300, 335), 8: (415, 375),
    9: (515, 335), 10: (480, 220), 11: (515, 105), 12: (415, 65),
}


def _label(chart: dict, house: int) -> list[str]:
    asc_sign = chart["ascendant"]["sign"]
    sign_number = ((asc_sign + house - 1) % 12) + 1
    lines = [str(sign_number)]
    for item in chart["houses"].get(house, chart["houses"].get(str(house), [])):
        suffix = " ℞" if item["retrograde"] else ""
        lines.append(f'{item["name"]} {item["degree"]:.1f}°{suffix}')
    return lines


def render_north_indian_svg(chart: dict, title: str, destination: Path) -> None:
    text_items: list[str] = []
    for house, (x, y) in HOUSE_CENTRES.items():
        for index, line in enumerate(_label(chart, house)):
            css = "sign" if index == 0 else "planet"
            text_items.append(
                f'<text class="{css}" x="{x}" y="{y + index * 17}" text-anchor="middle">'
                f"{escape(line)}</text>"
            )

    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="600" height="480" viewBox="0 0 600 480">
  <style>
    .frame {{ fill: #fffaf0; stroke: #7c2d12; stroke-width: 2; }}
    .line {{ stroke: #7c2d12; stroke-width: 1.5; }}
    .title {{ font: 700 22px sans-serif; fill: #431407; }}
    .sign {{ font: 700 12px sans-serif; fill: #b45309; }}
    .planet {{ font: 13px sans-serif; fill: #1c1917; }}
  </style>
  <text class="title" x="300" y="28" text-anchor="middle">{escape(title)}</text>
  <rect class="frame" x="40" y="40" width="520" height="400"/>
  <path class="line" d="M40 40 L560 440 M560 40 L40 440 M300 40 L560 240 L300 440 L40 240 Z" fill="none"/>
  {''.join(text_items)}
</svg>'''
    destination.write_text(svg, encoding="utf-8")

