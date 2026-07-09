from zipfile import ZipFile
import xml.etree.ElementTree as ET
from pathlib import Path
import json
KMZ_FILE = Path(__file__).parent / "mall_hof.kmz"

def parse_coordinates(text: str):
    points = []

    for line in text.strip().split():

        lng, lat, _ = line.split(",")

        points.append({
            "lat": float(lat),
            "lng": float(lng)
        })

    return points

with ZipFile(KMZ_FILE, "r") as kmz:
    with kmz.open("doc.kml") as kml_file:

        tree = ET.parse(kml_file)
        root = tree.getroot()

        ns = {
            "kml": "http://www.opengis.net/kml/2.2"
        }

        placemarks = root.findall(".//kml:Placemark", ns)

        print(f"Found {len(placemarks)} placemarks")

stores = []

for placemark in placemarks:

    name = placemark.find("kml:name", ns)
    polygon = placemark.find(".//kml:Polygon", ns)

    if name is None or polygon is None:
        continue

    coordinates = polygon.find(".//kml:coordinates", ns)

    if coordinates is None:
        continue

    stores.append({
        "name": name.text,
        "polygon": parse_coordinates(coordinates.text)
    })

print(f"Imported {len(stores)} stores")

print(stores[:3])
OUTPUT_FILE = Path(__file__).parent.parent / "data" / "mall_hof.json"

OUTPUT_FILE.parent.mkdir(exist_ok=True)

with open(OUTPUT_FILE, "w", encoding="utf-8") as file:
    json.dump(
        stores,
        file,
        ensure_ascii=False,
        indent=4
    )

print(f"\nSaved {len(stores)} stores")
print(OUTPUT_FILE)