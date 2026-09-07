# Earth textures

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
are used the same way its own official examples use them (see
`examples/webgl_shaders_ocean.html` / earth-themed examples upstream).

Used by `assets/js/space-3d.js`'s `create3DEarthGroup()` in place of the
earlier hand-drawn canvas textures — replace the files here (keep the same
names, or update the loader paths) to swap in different imagery.
