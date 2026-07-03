The Street Generator started as a very personal problem: I wanted a quick way to design street cross-sections without opening heavy software or fighting with CAD tools. In urban planning, street design is everything. The width of a sidewalk, where you put the bike lane, how much space cars actually get versus what is left for people. I wanted to visualize those decisions instantly in the browser.

## What it does

You pick the elements you want in your street section, arrange them, set their widths, and the tool draws the cross-section for you in real time. You can evaluate whether the widths make sense and then export the result as a PNG or even as an SVG file, which means it is ready to drop into a presentation, a report, or any design tool without losing quality.

It is deliberately simple. No login, no backend, no file to save. You open it, design, and export.

![Street Generator interface](/assets/blog/street-generator-1.png)

## Drawing from the map

One of the features I am most excited about is the ability to draw a street segment directly on the map. You pick a line on the real street network and the tool **reads the OpenStreetMap data for that section automatically**. It pulls what is actually there: the road width, existing lanes, footpaths, and other attributes. From that it builds the cross-section using real data, and you can still adjust every element afterwards.

This means you are not starting from a blank canvas. **You are starting from reality**, and then asking "what if we changed this lane to a bike lane?" or "what if we narrowed parking to widen the sidewalk?" All in one place, in the browser.

![Cross-section built from OSM data](/assets/blog/street-generator-2.png)

## Why this matters

Street cross-sections sound technical but they are basically the budget of a street: every meter counts. If you give 3 meters to parking, that is 3 meters not going to a bike lane or a wider sidewalk. Making those trade-offs visible, instantly and from real data, helps people think more concretely about street space. It is also a good way to communicate proposals without needing everyone in the room to read technical drawings.

## What comes next

The tool already has an early **AI capability** to help suggest cross-section configurations based on the street context. That is still being developed, but the idea is that you describe what you want ("more space for pedestrians, keep one car lane") and the tool proposes a starting point you can then adjust.

I also want to add basic **design validation**, like flagging if a sidewalk falls below accessibility standards, and more element types to cover a wider range of street typologies and street furnitures.
