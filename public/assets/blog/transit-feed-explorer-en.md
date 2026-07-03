**GTFS** (General Transit Feed Specification) is the standard format cities and transit agencies use to share public transport schedules: routes, stops, trips, and timetables. **GBFS** (General Bikeshare Feed Specification) is the equivalent for bike-share and shared micromobility, covering vehicle locations, station availability, and geofencing zones in real time.

Working with GTFS data comes up a lot in mobility analysis, and the format, while standardized, can be surprisingly annoying to just look at. You get a zip file full of text CSVs and usually have to write some code or import everything into a database just to answer a simple question: how many routes does this feed have, or which stops appear on this line?

Transit Feed Explorer started as a personal tool for exactly that problem. Over time it grew into something more complete: a browser-based environment for exploring both static transit schedules (GTFS) and live bike-share feeds (GBFS), without uploading anything to a server. The feed is parsed entirely on your device.

## What you can do with it

You can drop a GTFS zip or paste a GBFS endpoint URL and immediately get a map with routes, stops, and a hexagonal density grid built with Uber's H3 library. The grid adapts to trip and vehicle density, which makes it easy to spot where service is concentrated and where gaps are.

Catchment areas are one of the more useful features for planners. You pick a stop and get 15-minute walk and cycle isochrones computed from the actual road network via Valhalla, an open routing engine. Not simple radius circles but real network-based coverage.

You can also click anywhere on the map to query nearby OpenStreetMap features via the Overpass API, which is handy when you want to cross-reference transit coverage with what is actually on the ground. Geofencing zones from GBFS v2 and v3 are supported too, so you can visualise no-ride areas and operational boundaries alongside the rest of the data.

![Transit Feed Explorer routes view](/assets/blog/transit-feed-explorer-1.png)

## The use case

This is mostly a tool for myself and other people who work with public transit data. Before building this I was writing quick Python scripts to peek at feeds or loading them into QGIS. Both work but neither is fast. This is faster for the common questions, and the feed discovery feature helps too: there is a global city map where you can find and load feeds from cities around the world with one click.

It is also useful when you receive a feed from a city or operator and want to quickly sanity-check it, or when you need to build a quick KPI and the tool lets you write cross-referencing formulas to compute custom metrics from the data.

![Stop detail and calendar view](/assets/blog/transit-feed-explorer-2.png)

## How it is built

React and Vite on the frontend, Leaflet for the map, Recharts for charts. Map tiles come from CartoDB Light for street view and MapTiler Topo for terrain. Geocoding uses Nominatim.

GTFS files can be large and parsing them is CPU-heavy, so that work runs in a Web Worker. The UI stays usable while the feed loads in the background, which matters when you are dropping in a feed for a large city.

There is no backend. Nothing gets sent to a server and the tool works offline once the page is open.
