# Voxel Builder
**Version 3.4.1**

![screenshot](screenshot.png?raw=true "Screenshot")

3D voxel modeling application built using Babylon.js engine<br>

## Features
- ***Performance***: optimized for maximum performance, bare minimum dependencies
- ***Files***: new project, load project, save project, import obj, export glb (texture included)
- ***Storage***: local storage to quickly save and load project
- ***Voxel Tools***: add, remove, transform, hide, delete hidden (freeze), normalize position
- ***Color Tools***: color palette, paint color, pick color, fill by color, hide by color
- ***HDRI***: import hdr map for lighting and/or background
- ***Presets***: create grid and random voxels
- ***Voxelization***: import obj and voxelize mesh
- ***HQ Render***: high-quality render mode

***Supported Platforms***
<br>
- Electron (recommended)
- Google Chrome
- Partially support Google Chrome on modern android devices

## Changelog
```
v1: mesh instances -> performance failure
v2: hidden voxel instances, build mesh by CSG boolean -> performance failure on events, color issue
v3: voxel is just a position and color, build mesh by SPS particles -> highest performance

[3.3]
- update to Babylon.js 4.1
- ui improvements and re-arrangements
- lighting rework and simplified, more optimized for desktop performance
- bug: remove prompt() for Electron, add numeric input fields in the Files menu
- bug: shadowGen.useBlurCloseExponentialShadowMap cause screen flashes in 4.0+, removed
- bug: fullscreen not working, fixed
[3.4]
- update to Babylon.js 4.2
- bug: local storage, getStorage() fixed
[3.4.1]
- add Electron package
- minor improvements
```

## Todo
```
- Improve high-quality render pipeline
- Improve voxelization algorithm
- Add keyboard shortcuts for desktop
```

## License
Code released under the [MIT license](https://github.com/nimadez/voxel-builder/blob/main/LICENSE).

## Credits
- [Babylon.js](https://www.babylonjs.com/)
- [Electron](https://github.com/electron)
- [Google Material Icons](https://github.com/google/material-design-icons)
