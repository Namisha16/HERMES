import urllib.request
import json
import re
import os

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8"
}

urls = {
    "gloves": "https://www.hermes.com/us/en/product/hommage-gloves-H262097GvDE/",
    "mens_rtw": "https://www.hermes.com/us/en/product/neo-pique-overshirt-H662500HG73/",
    "shoes": "https://www.hermes.com/us/en/category/women/shoes/sneakers/",
    "belts": "https://www.hermes.com/us/en/category/women/belts/",
    "hats": "https://www.hermes.com/us/en/category/women/accessories/",
    "jewelry": "https://www.hermes.com/us/en/search/?s=jewlry",
    "watches": "https://www.hermes.com/us/en/product/series12-case-band-apple-watch-hermes-single-tour-42mm-sangle-satin-1AWHS1242GOLDpH0001181v01LCWpH0000621OAJ/",
    "beauty": "https://www.hermes.com/us/en/category/make-up/?s=makeup#",
    "art_of_living": "https://www.hermes.com/us/en/search/?s=art%20of%20living",
    "tableware": "https://www.hermes.com/us/en/content/308227-tableware-collections/",
    "equestrian": "https://www.hermes.com/us/en/search/?s=Equestrian",
    "petit_h": "https://www.hermes.com/us/en/category/petit-h/"
}

for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, timeout=12) as resp:
            content = resp.read().decode("utf-8", errors="ignore")
            # find assets.hermes.com images or media images
            images = re.findall(r"https?://assets\.hermes\.com/images/[^\s\"'>\\]+", content)
            if not images:
                images = re.findall(r"https?://[^\s\"'>\\]+\.(?:jpg|jpeg|png|webp)", content)
            print(f"{name}: status {resp.status}, found {len(images)} images")
            if images:
                for img in images[:3]:
                    print(f"  {img}")
    except Exception as e:
        print(f"{name}: error: {e}")
