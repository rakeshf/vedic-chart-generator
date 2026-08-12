# Vedic Chart Generator

A small Python project that calculates sidereal planetary positions and generates:

- D1 — Rashi chart
- D9 — Navamsha chart
- D10 — Dashamsha chart
- JSON output
- North Indian SVG charts

The astronomical layer uses Swiss Ephemeris. The divisional-chart logic is kept in pure
Python so it can be unit tested independently.

## Setup

```bash
python -m venv .venv
source .venv/bin/activate          # Windows: .venv\Scripts\activate
pip install -e ".[dev]"
```

## Generate charts

```bash
vedic-chart \
  --name "Example Person" \
  --date 1990-01-01 \
  --time 12:00:00 \
  --timezone Asia/Kolkata \
  --latitude 28.6139 \
  --longitude 77.2090 \
  --output output
```

This produces:

```text
output/
├── chart.json
├── D1.svg
├── D9.svg
└── D10.svg
```

## Browser chart UI

Open `web/index.html` in a browser to validate chart inputs and render D1, D9,
and D10 North Indian charts from JavaScript. The city field can fill latitude
and longitude for common Indian cities such as Nagpur.

The UI accepts the `output/chart.json` produced by the CLI. Paste that JSON into
the Chart JSON box and click Render JSON.

For live recalculation from form inputs, run the Python API and open the served
page:

```bash
uvicorn vedic_chart.api:app --reload --host 127.0.0.1 --port 8000
```

Then open:

```text
http://127.0.0.1:8000
```

Use mean Rahu instead of true Rahu:

```bash
vedic-chart ... --node mean
```

## Python API

```python
from datetime import date, time
from vedic_chart import BirthData, ChartOptions, generate_charts

birth = BirthData(
    name="Example Person",
    date=date(1990, 1, 1),
    time=time(12, 0),
    timezone="Asia/Kolkata",
    latitude=28.6139,
    longitude=77.2090,
)

result = generate_charts(birth, ChartOptions(node="true"))
print(result["charts"]["D9"])
```

## Calculation conventions

- Sidereal zodiac
- Lahiri ayanamsha
- Whole-sign houses
- True lunar node by default
- Ketu exactly 180° opposite Rahu
- D9: standard Parashari Navamsha
- D10: odd signs start from themselves; even signs start from their ninth sign

Comparisons with other astrology software require identical ayanamsha, node type,
coordinates, timezone, ephemeris version, and divisional-chart convention.

## Test

```bash
pytest
```

The unit tests include boundary and canonical sign checks for D1, D9, and D10.

## License note

This project's own code is MIT licensed. `pyswisseph`/Swiss Ephemeris has separate
AGPL/commercial licensing requirements. Review those requirements before distributing a
closed-source or commercial application.
