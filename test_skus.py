import urllib.request

specs = {
    "rtw_men": {
        "slug": "neo-pique-straight-cut-jacket",
        "skus": ["662520H%20G01", "662520HG%2001", "662520H%2001", "662520HG01", "H662520HG01", "662520H"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg", "worn-wm-1-0-0-1000-1000_g.jpg"]
    },
    "belts": {
        "slug": "kelly-pocket-filou-18-belt",
        "skus": ["011908UK%2089", "011908UK89", "011908UK%2000", "011908UK", "011908UK%2001"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg", "worn-wm-1-0-0-1000-1000_g.jpg"]
    },
    "hats": {
        "slug": "vauban-h-delie-cap",
        "skus": ["262021N%2002", "262021N02", "262021N%2001", "262021N", "262021N%2003"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "side-wm-1-0-0-1000-1000_g.jpg"]
    },
    "jewelry": {
        "slug": "chaine-d-ancre-verso-bracelet-large-model",
        "skus": ["125409B%2000", "125409B%2000150", "125409B", "125409B00", "125409B%2001"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg"]
    },
    "beauty": {
        "slug": "matte-lipstick-limited-edition-rouge-scandinave",
        "skus": ["V60841MV083", "V60841MV%20083", "60841MV%20083", "60841MV083", "60841MV", "60841MV%2083"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg"]
    },
    "art_living": {
        "slug": "animaux-blocks-booties",
        "skus": ["104359M%200519", "104359M%2005", "104359M0519", "104359M", "104359M%2001"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg"]
    },
    "petit_h": {
        "slug": "mushroom-charm",
        "skus": ["1080918%2092", "108091892", "1080918", "1080918%2000", "1080918%2001"],
        "angles": ["front-wm-1-0-0-1000-1000_g.jpg", "front-1-0-0-1000-1000_g.jpg", "worn-1-0-0-1000-1000_g.jpg", "flat-wm-1-0-0-1000-1000_g.jpg"]
    }
}

found = {}
for name, data in specs.items():
    slug = data["slug"]
    found[name] = None
    for sku in data["skus"]:
        if found[name]:
            break
        for angle in data["angles"]:
            u = f"https://assets.hermes.com/is/image/hermesproduct/{slug}--{sku}-{angle}"
            try:
                req = urllib.request.Request(u, headers={"User-Agent": "Mozilla/5.0"})
                with urllib.request.urlopen(req, timeout=2) as r:
                    if r.status == 200:
                        print(f"SUCCESS [{name}]: {u}")
                        found[name] = u
                        break
            except Exception:
                pass
print("Finished. Found map:", found)
