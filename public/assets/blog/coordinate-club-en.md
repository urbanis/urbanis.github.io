The idea behind Commuters' Mapping came out of a conversation about how the end stations of Berlin's transit network tend to be in very different kinds of places. Some are in dense neighborhoods, some feel isolated, and whether you feel safe arriving there alone at night really depends on who you are and when you travel.

## The concept

Every train, tram, and U-Bahn line in Berlin has two end stations. That is where service begins and ends. I was curious: what are those places actually like, and what happens if you collect that information from the perspective of women traveling alone?

The app lets you explore all the end stations on a map, log your experience when you visit one, and see what the community has reported. You can rate how safe it felt, whether you would go alone, what kind of area it is in, and leave a note.

![Map view with Berlin end station pins](/assets/blog/coordinate-club-1.png)

## How it works

The map uses real GTFS transit data for the lines and a curated dataset of end stations. When you tap a pin, you can log an experience. The data lives in Supabase, so contributions from different people build up over time. Filters let you find stations rated as safe, stations only visited by others, or stations on a specific line type.

Station pins show three states: green for stations you have personally visited, purple for those the community has been to, and grey for unexplored ones. Over time the map fills in.

![Station detail and experience form](/assets/blog/coordinate-club-2.png)

## Why end stations

There is a planning gap here. End stations often get less attention in urban design because they are transition points, not destinations. But for the people who live near them and use them every day, they very much are destinations. This project is a small attempt to document that from a perspective that does not often make it into official data.
