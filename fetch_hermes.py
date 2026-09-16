import urllib.request
import re
import json

urls = {
    "rtw_men": "https://www.hermes.com/us/en/product/neo-pique-straight-cut-jacket-H662520HG01/",
    "shoes": "https://www.hermes.com/us/en/product/ninety-90-boot-H262081Zv02/",
    "belts": "https://www.hermes.com/us/en/product/kelly-pocket-filou-18-belt-H011908UK89/",
    "hats": "https://www.hermes.com/us/en/product/vauban-h-delie-cap-H262021Nv02/",
    "jewelry": "https://www.hermes.com/us/en/product/chaine-d-ancre-verso-bracelet-large-model-H125409Bv00150/",
    "watches": "https://www.hermes.com/us/en/product/ultra-4-case-band-apple-watch-hermes-single-tour-49mm-grand-h-titane-1AWHS1249TITANEpH0001091vTTLCWpH0003141vGTL/",
    "beauty": "https://www.hermes.com/us/en/product/matte-lipstick-limited-edition-rouge-scandinave-V60841MV083/",
    "art_living": "https://www.hermes.com/us/en/product/animaux-blocks-booties-H104359Mv0519/",
    "tableware": "https://www.hermes.com/us/en/product/balcon-du-guadalquivir-dessert-plate-P011007P/",
    "petit_h": "https://www.hermes.com/us/en/product/mushroom-charm-H1080918v92/",
    "symbols_farandole": "https://www.hermes.com/us/en/product/farandole-earrings-H221516Bv00/"
}

results = {}
for name, url in urls.items():
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"})
        with urllib.request.urlopen(req, timeout=10) as resp:
            html = resp.read().decode("utf-8")
            imgs = re.findall(r"https://assets\.hermes\.com/is/image/hermesproduct/[^\"\'?&]+", html)
            imgs = list(dict.fromkeys(imgs))
            og = re.findall(r'property="og:image"\s+content="([^"]+)"', html) or re.findall(r'name="og:image"\s+content="([^"]+)"', html)
            results[name] = {"imgs": imgs[:5], "og": og}
            print(f"[{name}] Done. imgs: {len(imgs)}, og: {og}")
    except Exception as e:
        print(f"[{name}] ERROR: {e}")

with open("hermes_images.json", "w") as f:
    json.dump(results, f, indent=2)
