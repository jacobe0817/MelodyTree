import copy
import os
import json


def setup():
    global artists
    global artists_by_genre
    global albums_by_artist
    print("\t\t\t                                                     .\n"
          "\t\t\t                                          .         ;\n"
          "\t\t\t             .              .              ;%     ;;\n"
          "\t\t\t               ,           ,                :;%  %;\n"
          "\t\t\t                :         ;                   :;%;'     .,\n"
          "\t\t\t       ,.        %;     %;            ;        %;'    ,;\n"
          "\t\t\t         ;       ;%;  %%;        ,     %;    ;%;    ,%'\n"
          "\t\t\t          %;       %;%;      ,  ;       %;  ;%;   ,%;'\n"
          "\t\t\t           ;%;      %;        ;%;        % ;%;  ,%;'\n"
          "\t\t\t            `%;.     ;%;     %;'         `;%%;.%;'\n"
          "\t\t\t             `:;%.    ;%%. %@;        %; ;@%;%'\n"
          "\t\t\t                `:%;.  :;bd%;          %;@%;'\n"
          "\t\t\t                  `@%:.  :;%.         ;@@%;'\n"
          "\t\t\t                    `@%.  `;@%.      ;@@%;\n"
          "\t\t\t                      `@%%. `@%%    ;@@%;\n"
          "\t\t\t                        ;@%. :@%%  %@@%;\n"
          "\t\t\t                          %@bd%%%bd%%:;\n"
          "\t\t\t                            #@%%%%%:;;       ___\n"
          "\t\t\t                            %@@%%%::;         |  __ _  _ \n"
          "\t\t\t                            %@@@%(o);  . '    |  | (/_(/_\n"
          "\t\t\t  |V| _  |  _  _| \/        %@@@o%;:(.,'\n"
          "\t\t\t  | |(/_ | (_)(_| /     `.. %@@@o%::;\n"
          "\t\t\t                           `)@@@o%::;\n"
          "\t\t\t                            %@@(o)::;\n"
          "\t\t\t                           .%@@@@%::;\n"
          "\t\t\t                           ;%@@@@%::;.\n"
          "\t\t\t                          ;%@@@@%%:;;;.\n"
          "    Artist data collected from allmusic.com   ...;%@@@@@%%:;;;;,..    ASCII art from ascii.co.uk and "
          "patorjk.com")
    data_path = os.path.join("..", "MelodyTreeData", "json")
    for file in os.listdir(data_path):
        with open(os.path.join(data_path, file), encoding="utf-8") as f:
            data = json.load(f)
            artists[data["name"]] = data
    for artist in artists.values():
        name = artist["name"]
        genre = artist["genre"]
        if genre not in artists_by_genre:
            artists_by_genre[genre] = []
        artists_by_genre[genre].append(name)
    for artist in artists.values():
        albums_by_artist[artist["name"]] = artist["albums"]
    print("=" * 120)
    print_centered("Welcome to Melody Tree!")
    print_centered("Programmed and designed by Jacob Epp")


def browse():
    global artists_by_genre
    print()
    for genre in artists_by_genre:
        print_genre(genre)


def print_genre(genre):
    global artists_by_genre
    print_centered(genre, underline=True)
    print_list(artists_by_genre[genre], list_for_average_length=list(artists_by_genre.keys()))
    print("\n")


def genre_search():
    print()
    while (True):
        print_centered("Enter a number to see the artists in that genre")
        print_centered("Enter (c) to cancel")
        print()
        genres = list(artists_by_genre.keys())
        genres = sorted(genres, key=lambda genre: len(artists_by_genre[genre]), reverse=True)
        genre_strings = [str(i + 1) + ") " + genres[i] for i in range(len(genres))]
        print_list(genre_strings, dash=" ")
        print()
        user_input = input(">>")
        if user_input.upper() == "C":
            print()
            return
        try:
            index = int(user_input) - 1
            genre = genres[index]
            print()
            print_genre(genre)
            break
        except:
            print_centered("**invalid number**")
            print()


def print_centered(phrase, underline=False, overline=False):
    if overline:
        print(" " * (56 - len(phrase) // 2), "-" * len(phrase), sep="")
    print(" " * (56 - len(phrase) // 2), phrase, sep="")
    if underline:
        print(" " * (56 - len(phrase) // 2), "-" * len(phrase), sep="")


def print_list(list_to_print, list_for_average_length=None, dash="-"):
    if list_for_average_length is None:
        list_for_average_length = list_to_print
    string_lengths = [len(item) for item in list_for_average_length]
    average_length = int(sum(string_lengths) / len(list_for_average_length))
    for item in list_to_print:
        print(" " * (53 - average_length // 2), dash, item, sep="")


def print_albums(artist):
    global albums_by_artist
    print()
    print_centered(artist, underline=True)
    print_list(albums_by_artist[artist])
    print("\n")


def print_related_artists(artist):
    global artists
    try:
        influencers = [influencer for influencer in artists[artist]["influencers"] if influencer in artists.keys()]
    except:
        influencers = []
    try:
        similars = [similar for similar in artists[artist]["similars"] if similar in artists.keys()]
    except:
        similars = []
    try:
        followers = [follower for follower in artists[artist]["followers"] if follower in artists.keys()]
    except:
        followers = []

    all = copy.copy(influencers)
    all.extend(similars)
    all.extend(followers)

    print("\n")
    print_centered(artist, underline=True, overline=True)
    print("\n")

    print_centered("influenced by", underline=True)
    if len(influencers) == 0:
        print_centered("**no influencers in database**")
    else:
        print_list(influencers, list_for_average_length=all)
    print("\n")

    print_centered("similar to", underline=True)
    if len(similars) == 0:
        print_centered("**no similar artists in database**")
    else:
        print_list(similars, list_for_average_length=all)
    print("\n")

    print_centered("followed by", underline=True)
    if len(followers) == 0:
        print_centered("**no followers in database**")
    else:
        print_list(followers, list_for_average_length=all)
    print("\n")


def artist_search():
    invalid = True
    skip = False
    target = None
    while (invalid):
        print()
        print_centered("Enter the name of an artist in the database")
        print_centered("Enter (c) to cancel\n")
        user_input = input(">>").upper()
        if user_input == "C":
            print()
            skip = True
            invalid = False
        for artist in albums_by_artist:
            if user_input == artist.upper():
                invalid = False
                target = artist
                break
        if invalid:
            print_centered("**invalid artist**")
            print_centered("**make sure name is spelled as appears in the database**")
    while (not skip):
        print()
        print_centered("Enter (a) for recommended albums by this artist, (r) for related artists, or (c) to cancel")
        user_input = input(">>").upper()
        if user_input == "A":
            print_albums(target)
            break
        elif user_input == "R":
            print_related_artists(target)
            break
        elif user_input == "C":
            print()
            break


if __name__ == '__main__':
    artists = {}
    artists_by_genre = {}
    albums_by_artist = {}
    setup()
    print("\n")
    while (True):
        print(" Enter (b) to browse, (g) to search for the musicians in a genre, (a) to search for artist information, "
              "or (q) to quit")
        user_input = input(">>")
        user_input = user_input.upper()
        if user_input == "B":
            browse()
        elif user_input == "G":
            genre_search()
        elif user_input == "A":
            artist_search()
        elif user_input == "Q":
            break
        else:
            print()
