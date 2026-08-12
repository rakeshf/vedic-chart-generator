import argparse
import json
from datetime import date, time
from pathlib import Path

from .models import BirthData, ChartOptions
from .render import render_north_indian_svg
from .service import generate_charts


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Generate Vedic D1, D9, and D10 charts")
    parser.add_argument("--name", default="Native")
    parser.add_argument("--date", required=True, help="Birth date: YYYY-MM-DD")
    parser.add_argument("--time", required=True, help="Local birth time: HH:MM[:SS]")
    parser.add_argument("--timezone", required=True, help="IANA timezone, e.g. Asia/Kolkata")
    parser.add_argument("--latitude", required=True, type=float)
    parser.add_argument("--longitude", required=True, type=float)
    parser.add_argument("--node", choices=("true", "mean"), default="true")
    parser.add_argument("--output", type=Path, default=Path("output"))
    return parser


def main() -> None:
    args = build_parser().parse_args()
    birth = BirthData(
        name=args.name,
        date=date.fromisoformat(args.date),
        time=time.fromisoformat(args.time),
        timezone=args.timezone,
        latitude=args.latitude,
        longitude=args.longitude,
    )
    result = generate_charts(birth, ChartOptions(node=args.node))
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / "chart.json").write_text(
        json.dumps(result, indent=2, ensure_ascii=False), encoding="utf-8"
    )
    for chart_name, chart in result["charts"].items():
        render_north_indian_svg(
            chart,
            f"{birth.name} — {chart_name}",
            args.output / f"{chart_name}.svg",
        )
    print(f"Generated chart.json and SVG charts in {args.output.resolve()}")


if __name__ == "__main__":
    main()

