import os.path
import json
from bs4 import BeautifulSoup


# hello baby!
def get_artist_json(main_page):
    artist = {}
    with open(os.path.join("html", main_page), "r", encoding="utf-8") as html_file:
        content = html_file.read()
        soup = BeautifulSoup(content, "lxml")
        artist["name"] = soup.find("h1", class_="artist-name").text.strip()

        genre_card = soup.find("div", class_="genre")
        genre_tags = genre_card.find_all("a")
        artist["genre"] = genre_tags[0].text

        album_card = soup.find("section", class_="album-highlights")
        album_tags = album_card.find_all("a", class_="cropped-image-link")
        artist["albums"] = []
        for album in album_tags:
            artist["albums"].append(album.get("oldtitle"))

    related_page = main_page.split(sep="Songs, Albums, Reviews, Bio & More")
    related_page = "Similar Artists".join(related_page)

    with open(os.path.join("html", related_page), "r", encoding="utf-8") as html_file:
        content = html_file.read()
        soup = BeautifulSoup(content, "lxml")

        try:
            similar_card = soup.find("section", class_="related similars")
            similar_tags = similar_card.find_all("a")
            artist["similars"] = [tag.text for tag in similar_tags]
        except:
            print("no similars for ", artist["name"])

        try:
            influencer_card = soup.find("section", class_="related influencers")
            influencer_tags = influencer_card.find_all("a")
            artist["influencers"] = [tag.text for tag in influencer_tags]
        except:
            print("no influencers for ", artist["name"])

        try:
            follower_card = soup.find("section", class_="related followers")
            follower_tags = follower_card.find_all("a")
            artist["followers"] = [tag.text for tag in follower_tags]
        except:
            print("no followers for ", artist["name"])

    artist_name_underscore = "_".join(artist["name"].lower().split())
    try:
        artist_name_underscore.index("/")
        artist_name_underscore = artist_name_underscore.split(sep="/")
        artist_name_underscore = "_".join(artist_name_underscore)
    except:
        pass
    json_name = artist_name_underscore + ".json"

    with open(os.path.join("json", json_name), "w", encoding="utf-8") as f:
        json.dump(artist, f)


if __name__ == '__main__':
    for page in os.listdir("html"):
        if page.endswith("Songs, Albums, Reviews, Bio & More AllMusic.htm"):
            try:
                get_artist_json(page)
            except:
                print("Error scraping page:", page)
