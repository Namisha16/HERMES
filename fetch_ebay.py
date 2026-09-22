import urllib.request
import re

urls = [
    "https://www.ebay.com/itm/395642862835",
    "https://www.ebay.com/itm/235730303866"
]

for url in urls:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"})
        with urllib.request.urlopen(req, timeout=5) as r:
            html = r.read().decode("utf-8", errors="ignore")
            imgs = re.findall(r'https://i\.ebayimg\.com/images/g/[^\s"\'\\]+/(?:s-l1600|s-l1200|s-l500|s-l640)\.(?:jpg|png|webp)', html)
            print(f"[{url}] found {len(imgs)} imgs:")
            for img in list(dict.fromkeys(imgs))[:3]:
                print("  ", img)
    except Exception as e:
        print(f"[{url}] error: {e}")
