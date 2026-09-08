# Planet textures

## Earth

Real equirectangular Earth textures (day map, night lights, ocean specular
mask, cloud layer), sourced from the [three.js](https://github.com/mrdoob/three.js)
project's own example assets:

```
examples/textures/planets/earth_day_4096.jpg
examples/textures/planets/earth_night_4096.jpg
examples/textures/planets/earth_specular_2048.jpg
examples/textures/planets/earth_clouds_1024.png
```

three.js is MIT-licensed; these textures ship as part of that repository and
are used the same way its own official examples use them.

## Mars & Saturn

```
mars_2k.jpg
saturn_2k.jpg
saturn_ring_alpha_2k.png
```

Sourced from [Solar System Scope](https://www.solarsystemscope.com/textures/)
(2k resolution set), licensed **CC BY 4.0** — attribution required:

> Textures by [Solar System Scope](https://www.solarsystemscope.com/textures/), CC BY 4.0

Keep that attribution somewhere reachable from the live site (e.g. this file,
or a credits section) as long as these files are in use — CC BY doesn't
require it in the UI itself, but don't drop it entirely.

## Usage

Used by `assets/js/space-3d.js`'s `create3DEarthGroup()` /
`create3DMarsGroup()` / `create3DSaturnGroup()` in place of the earlier
hand-drawn canvas textures — replace the files here (keep the same names, or
update the loader paths) to swap in different imagery.
